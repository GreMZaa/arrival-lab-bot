import asyncio
from datetime import datetime

from aiogram import Bot, Router, types
from aiogram.fsm.context import FSMContext

from keyboards.reply import main_menu
from keyboards.inline import confirm_purchase
from services.supabase_service import save_purchase
from services.sheets_service import append_purchase
from services.admin_notifier import notify_new_purchase, notify_error
from handlers.programs import PROGRAMS

router = Router()

# Маппинг program_key → название для хранения
KEY_TO_NAME = {
    "start": "START",
    "platform_pro": "PLATFORM PRO",
    "launch": "LAUNCH",
    "restart": "RESTART",
}

# Маппинг program_key → цена (число для БД)
KEY_TO_PRICE = {
    "start": 14990,
    "platform_pro": 59900,
    "launch": 49900,
    "restart": 39900,
}


# ── Кнопка «Купить программу» ────────────────────────────

@router.callback_query(lambda c: c.data.startswith("buy_"))
async def on_buy_request(callback: types.CallbackQuery):
    key = callback.data.removeprefix("buy_")
    if key not in PROGRAMS:
        await callback.answer()
        return

    name = KEY_TO_NAME.get(key, key.upper())
    price = PROGRAMS[key]["price"]

    await callback.message.edit_text(
        f"Вы выбрали программу:\n\n<b>{name}</b>\n💰 {price}\n\n"
        "Для продолжения нажмите кнопку ниже.",
        parse_mode="HTML",
        reply_markup=confirm_purchase(key),
    )
    await callback.answer()


# ── Кнопка «Перейти к оплате» ───────────────────────────

@router.callback_query(lambda c: c.data.startswith("pay_"))
async def on_pay(callback: types.CallbackQuery, bot: Bot):
    key = callback.data.removeprefix("pay_")
    if key not in KEY_TO_NAME:
        await callback.answer()
        return

    program_name = KEY_TO_NAME[key]
    price_num = KEY_TO_PRICE[key]
    price_str = PROGRAMS[key]["price"]
    telegram_id = callback.from_user.id
    username = callback.from_user.username
    first_name = callback.from_user.first_name or ""
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Сохраняем покупку в Supabase
    try:
        await asyncio.to_thread(
            save_purchase,
            telegram_id=telegram_id,
            program_name=program_name,
            price=price_num,
        )
    except Exception as e:
        await notify_error(bot, e, "save_purchase")
        await callback.answer("Произошла ошибка. Попробуйте позже.", show_alert=True)
        return

    # Сохраняем в Google Sheets
    try:
        await asyncio.to_thread(
            append_purchase,
            telegram_id=telegram_id,
            username=username,
            first_name=first_name,
            program_name=program_name,
            price=price_str,
            paid_at=now,
        )
    except Exception as e:
        await notify_error(bot, e, "append_purchase")

    # Уведомляем админа
    await notify_new_purchase(
        bot,
        telegram_id=telegram_id,
        username=username,
        first_name=first_name,
        program_name=program_name,
        price=price_str,
    )

    await callback.message.edit_text(
        "🎉 <b>Спасибо за покупку!</b>\n\n"
        "Мы получили вашу оплату.\n"
        "В ближайшее время специалист Arrival Lab свяжется с вами и предоставит дальнейшие инструкции.",
        parse_mode="HTML",
        reply_markup=main_menu,
    )
    await callback.answer()


# ── Кнопка «Главное меню» (inline) ───────────────────────

@router.callback_query(lambda c: c.data == "main_menu")
async def on_main_menu(callback: types.CallbackQuery):
    await callback.message.edit_text(
        "🏠 <b>Главное меню</b>\n\nВыберите вариант, который лучше всего подходит именно вам.",
        parse_mode="HTML",
        reply_markup=None,
    )
    await callback.message.answer(
        "Выберите программу:",
        reply_markup=main_menu,
    )
    await callback.answer()
