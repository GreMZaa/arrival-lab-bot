import asyncio
from datetime import datetime, date

from aiogram import Bot, Router, types
from aiogram.fsm.context import FSMContext

from keyboards.reply import main_menu
from services.supabase_service import user_exists, save_user
from services.sheets_service import append_user
from services.admin_notifier import notify_new_user, notify_error
from states.form_states import Registration

router = Router()


# ── Кнопка «Начать» ───────────────────────────────────────

@router.message(lambda m: m.text == "🚀 Начать")
async def start_registration(message: types.Message, state: FSMContext):
    try:
        registered = user_exists(message.from_user.id)
    except Exception:
        registered = False

    if registered:
        await message.answer(
            "Вы уже зарегистрированы!",
            reply_markup=main_menu,
        )
        return

    await state.set_state(Registration.waiting_for_name)
    await message.answer("Как вас зовут?", reply_markup=types.ReplyKeyboardRemove())



# ── Шаг 1: Имя ───────────────────────────────────────────

@router.message(Registration.waiting_for_name)
async def process_name(message: types.Message, state: FSMContext):
    name = message.text.strip()
    if not name:
        await message.answer("Пожалуйста, введите ваше имя.")
        return

    await state.update_data(first_name=name)
    await state.set_state(Registration.waiting_for_birth_date)
    await message.answer("Введите вашу дату рождения.\n\nФормат: <b>ДД.ММ.ГГГГ</b>", parse_mode="HTML")


# ── Шаг 2: Дата рождения ──────────────────────────────────

@router.message(Registration.waiting_for_birth_date)
async def process_birth_date(
    message: types.Message, state: FSMContext, bot: Bot
):
    text = message.text.strip()
    parsed = _parse_date(text)

    if parsed is None:
        await message.answer(
            "⚠ Неверный формат. Пожалуйста, введите дату в формате <b>ДД.ММ.ГГГГ</b>.",
            parse_mode="HTML",
        )
        return

    data = await state.get_data()
    first_name = data["first_name"]
    birth_date: date = parsed
    telegram_id = message.from_user.id
    username = message.from_user.username
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Сохраняем в Supabase
    try:
        await asyncio.to_thread(
            save_user,
            telegram_id=telegram_id,
            username=username,
            first_name=first_name,
            birth_date=birth_date,
        )
    except Exception as e:
        await notify_error(bot, e, "save_user при регистрации")
        await message.answer("Произошла ошибка при сохранении. Попробуйте позже.")
        await state.clear()
        return

    # Сохраняем в Google Sheets
    try:
        await asyncio.to_thread(
            append_user,
            telegram_id=telegram_id,
            username=username,
            first_name=first_name,
            birth_date=birth_date.isoformat(),
            registered_at=now,
        )
    except Exception as e:
        await notify_error(bot, e, "append_user при регистрации")
        # Не блокируем пользователя — Sheets не критичны

    # Уведомляем админа
    await notify_new_user(
        bot,
        telegram_id=telegram_id,
        username=username,
        first_name=first_name,
        birth_date=birth_date.isoformat(),
    )

    await state.clear()
    await message.answer(
        "<b>Отлично!</b>\n\n"
        "Теперь выберите вариант, который лучше всего подходит именно вам.",
        parse_mode="HTML",
        reply_markup=main_menu,
    )


# ── Утилиты ──────────────────────────────────────────────

def _parse_date(text: str) -> date | None:
    """Парсит дату в формате ДД.ММ.ГГГГ."""
    try:
        parts = text.split(".")
        if len(parts) != 3:
            return None
        day, month, year = int(parts[0]), int(parts[1]), int(parts[2])
        return date(year, month, day)
    except (ValueError, OverflowError):
        return None
