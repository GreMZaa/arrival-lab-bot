import asyncio
from datetime import datetime, date

from aiogram import Bot, Router, types
from aiogram.fsm.context import FSMContext

from keyboards.reply import main_menu
from services.supabase_service import save_application
from services.sheets_service import append_application
from services.admin_notifier import notify_new_application, notify_error
from states.form_states import Agency

router = Router()


# ── Кнопка «Подать заявку» ───────────────────────────────

@router.callback_query(lambda c: c.data == "agency_apply")
async def start_agency_form(callback: types.CallbackQuery, state: FSMContext):
    await state.set_state(Agency.waiting_for_full_name)
    await callback.message.edit_text(
        "📝 <b>Анкета агентства</b>\n\nШаг 1 из 3\n\nВведите ваше ФИО:",
        parse_mode="HTML",
        reply_markup=None,
    )
    await callback.message.answer("Введите ваше ФИО:", reply_markup=types.ReplyKeyboardRemove())
    await callback.answer()


# ── Шаг 1: ФИО ────────────────────────────────────────────

@router.message(Agency.waiting_for_full_name)
async def process_full_name(message: types.Message, state: FSMContext):
    full_name = message.text.strip()
    if not full_name:
        await message.answer("Пожалуйста, введите ФИО.")
        return

    await state.update_data(full_name=full_name)
    await state.set_state(Agency.waiting_for_birth_date)
    await message.answer("Введите дату рождения.\n\nФормат: <b>ДД.ММ.ГГГГ</b>", parse_mode="HTML")


# ── Шаг 2: Дата рождения ──────────────────────────────────

@router.message(Agency.waiting_for_birth_date)
async def process_birth_date(message: types.Message, state: FSMContext):
    parsed = _parse_date(message.text.strip())
    if parsed is None:
        await message.answer(
            "⚠ Неверный формат. Введите дату в формате <b>ДД.ММ.ГГГГ</b>.",
            parse_mode="HTML",
        )
        return

    await state.update_data(birth_date=parsed)
    await state.set_state(Agency.waiting_for_about)
    await message.answer(
        "Расскажите немного о себе.\n\n"
        "Например:\n"
        " • Есть ли у вас опыт стриминга?\n"
        " • Почему вы хотите работать с Arrival Lab?\n"
        " • Какие цели вы ставите перед собой?\n"
        " • Есть ли у вас уже виртуальный персонаж?\n\n"
        "Ответ вводится в свободной форме.",
    )


# ── Шаг 3: О себе ─────────────────────────────────────────

@router.message(Agency.waiting_for_about)
async def process_about(message: types.Message, state: FSMContext, bot: Bot):
    about = message.text.strip()
    if not about:
        await message.answer("Пожалуйста, расскажите о себе.")
        return

    data = await state.get_data()
    telegram_id = message.from_user.id
    username = message.from_user.username
    full_name = data["full_name"]
    birth_date: date = data["birth_date"]
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Сохраняем в Supabase
    try:
        await asyncio.to_thread(
            save_application,
            telegram_id=telegram_id,
            full_name=full_name,
            birth_date=birth_date,
            about=about,
        )
    except Exception as e:
        await notify_error(bot, e, "save_application")
        await message.answer("Произошла ошибка при сохранении заявки. Попробуйте позже.")
        await state.clear()
        return

    # Сохраняем в Google Sheets
    try:
        await asyncio.to_thread(
            append_application,
            telegram_id=telegram_id,
            username=username,
            full_name=full_name,
            birth_date=birth_date.isoformat(),
            about=about,
            submitted_at=now,
        )
    except Exception as e:
        await notify_error(bot, e, "append_application")

    # Уведомляем админа
    await notify_new_application(
        bot,
        telegram_id=telegram_id,
        username=username,
        full_name=full_name,
    )

    await state.clear()
    await message.answer(
        "✅ <b>Спасибо!</b>\n\n"
        "Ваша заявка успешно отправлена.\n"
        "Мы внимательно рассмотрим её и свяжемся с вами в ближайшее время.",
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
