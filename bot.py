import asyncio
import logging

from aiogram import Bot, Dispatcher
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.exceptions import AiogramError

from config import BOT_TOKEN
from middlewares.db import SupabaseMiddleware, RegistrationMiddleware
from services.admin_notifier import notify_error

from handlers.start import router as start_router
from handlers.registration import router as registration_router
from handlers.programs import router as programs_router
from handlers.payment import router as payment_router
from handlers.agency import router as agency_router

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s — %(name)s — %(levelname)s — %(message)s",
)

logger = logging.getLogger(__name__)


async def main():
    if not BOT_TOKEN:
        logger.error("BOT_TOKEN не задан. Создайте .env файл на основе .env.example.")
        return

    bot = Bot(token=BOT_TOKEN)
    storage = MemoryStorage()
    dp = Dispatcher(storage=storage)

    # Middleware
    dp.message.middleware(SupabaseMiddleware())
    dp.callback_query.middleware(SupabaseMiddleware())
    dp.message.middleware(RegistrationMiddleware())
    dp.callback_query.middleware(RegistrationMiddleware())

    # Роутеры (порядок важен)
    dp.include_router(start_router)
    dp.include_router(registration_router)
    dp.include_router(programs_router)
    dp.include_router(payment_router)
    dp.include_router(agency_router)

    # Установка команд в меню
    from aiogram.types import BotCommand
    try:
        await bot.set_my_commands([
            BotCommand(command="start", description="Запустить бота"),
            BotCommand(command="help", description="Служба поддержки"),
            BotCommand(command="legal", description="Правовые документы"),
        ])
    except Exception as e:
        logger.error(f"Не удалось установить команды меню: {e}")

    # Глобальный обработчик ошибок
    @dp.errors()
    async def global_error_handler(event: AiogramError, bot: Bot):
        await notify_error(bot, event, "global_error_handler")
        logger.exception("Unhandled error: %s", event)

    logger.info("Бот Arrival Lab запущен")
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
