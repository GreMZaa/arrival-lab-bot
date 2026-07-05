from aiogram import Bot
from aiogram.exceptions import TelegramAPIError

from config import ADMIN_CHAT_ID


async def notify_admin(bot: Bot, text: str, parse_mode: str = "HTML") -> bool:
    """Отправляет уведомление администратору."""
    if not ADMIN_CHAT_ID:
        return False
    try:
        await bot.send_message(
            chat_id=ADMIN_CHAT_ID,
            text=text,
            parse_mode=parse_mode,
        )
        return True
    except TelegramAPIError as e:
        print(f"[admin_notifier] Failed to notify admin: {e}")
        return False


async def notify_new_user(
    bot: Bot,
    telegram_id: int,
    username: str | None,
    first_name: str,
    birth_date: str,
) -> None:
    await notify_admin(
        bot,
        (
            "👤 <b>Новый пользователь</b>\n\n"
            f"ID: <code>{telegram_id}</code>\n"
            f"Username: @{username or 'нет'}\n"
            f"Имя: {first_name}\n"
            f"Дата рождения: {birth_date}"
        ),
    )


async def notify_new_purchase(
    bot: Bot,
    telegram_id: int,
    username: str | None,
    first_name: str,
    program_name: str,
    price: str,
) -> None:
    await notify_admin(
        bot,
        (
            "💳 <b>Новая покупка</b>\n\n"
            f"ID: <code>{telegram_id}</code>\n"
            f"Username: @{username or 'нет'}\n"
            f"Имя: {first_name}\n"
            f"Программа: {program_name}\n"
            f"Стоимость: {price}"
        ),
    )


async def notify_new_application(
    bot: Bot,
    telegram_id: int,
    username: str | None,
    full_name: str,
) -> None:
    await notify_admin(
        bot,
        (
            "📝 <b>Новая заявка в агентство</b>\n\n"
            f"ID: <code>{telegram_id}</code>\n"
            f"Username: @{username or 'нет'}\n"
            f"ФИО: {full_name}"
        ),
    )


async def notify_error(bot: Bot, error: Exception, context: str = "") -> None:
    text = f"⚠️ <b>Ошибка бота</b>\n{context}\n{type(error).__name__}: {error}"
    await notify_admin(bot, text)
