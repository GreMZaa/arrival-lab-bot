from aiogram import Router, types
from aiogram.filters import CommandStart, Command

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


@router.message(Command("legal"))
@router.message(Command("documents"))
async def cmd_legal(message: types.Message):
    text = (
        "📄 <b>Юридические документы ARRIVA lab:</b>\n\n"
        "1. <a href='https://telegra.ph/Politika-konfidencialnosti-06-21-31'>Политика конфиденциальности</a>\n"
        "2. <a href='https://telegra.ph/Polzovatelskoe-soglashenie-04-01-19'>Пользовательское соглашение</a>\n\n"
        "📩 <b>Поддержка:</b>\n"
        "• Telegram: @ArrivalLabBOT\n"
        "• Email: support@arrivalab.ru"
    )
    await message.answer(text, parse_mode="HTML", disable_web_page_preview=True)


@router.message(Command("help"))
@router.message(Command("support"))
async def cmd_help(message: types.Message):
    text = (
        "💬 <b>Служба поддержки ARRIVA lab:</b>\n\n"
        "Если у вас возникли вопросы по оплате, настройке аватара или доступу в личный кабинет, мы всегда рады помочь!\n\n"
        "📩 <b>Контакты для связи:</b>\n"
        "• Telegram: @ArrivalLabBOT\n"
        "• Email: support@arrivalab.ru\n\n"
        "📄 <b>Юридическая информация:</b>\n"
        "• <a href='https://telegra.ph/Politika-konfidencialnosti-06-21-31'>Политика конфиденциальности</a>\n"
        "• <a href='https://telegra.ph/Polzovatelskoe-soglashenie-04-01-19'>Пользовательское соглашение</a>"
    )
    await message.answer(text, parse_mode="HTML", disable_web_page_preview=True)

