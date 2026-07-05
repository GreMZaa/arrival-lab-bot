from aiogram import Router, types
from aiogram.filters import CommandStart

from keyboards.reply import start_keyboard, main_menu
from services.supabase_service import user_exists

router = Router()

WELCOME_TEXT = (
    "👋 <b>Добро пожаловать в Arrival Lab!</b>\n\n"
    "Я — Ariva, цифровой консультант лаборатории цифровых моделей.\n\n"
    "Я помогу подобрать программу именно под вашу цель.\n"
    "Это займет меньше минуты."
)


@router.message(CommandStart())
async def cmd_start(message: types.Message):
    try:
        registered = user_exists(message.from_user.id)
    except Exception:
        registered = False

    if registered:
        await message.answer(
            "🏠 <b>Главное меню</b>\n\nВыберите вариант, который лучше всего подходит именно вам.",
            parse_mode="HTML",
            reply_markup=main_menu,
        )
    else:
        await message.answer(
            WELCOME_TEXT,
            parse_mode="HTML",
            reply_markup=start_keyboard,
        )

