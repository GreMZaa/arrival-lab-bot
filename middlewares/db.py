from typing import Any, Callable

from aiogram import BaseMiddleware
from aiogram.types import TelegramObject, Message, CallbackQuery
from aiogram.fsm.context import FSMContext

from services import supabase_service
from services.supabase_service import user_exists


class SupabaseMiddleware(BaseMiddleware):
    """Прокидывает Supabase-клиент в data хэндлеров."""

    async def __call__(
        self,
        handler: Callable,
        event: TelegramObject,
        data: dict[str, Any],
    ) -> Any:
        data["db"] = supabase_service
        return await handler(event, data)


class RegistrationMiddleware(BaseMiddleware):
    """Проверяет, зарегистрирован ли пользователь, и принуждает к регистрации."""

    async def __call__(
        self,
        handler: Callable,
        event: TelegramObject,
        data: dict[str, Any],
    ) -> Any:
        user = data.get("event_from_user")
        if not user or user.is_bot:
            return await handler(event, data)

        telegram_id = user.id
        state: FSMContext = data.get("state")
        current_state = await state.get_state() if state else None

        # Исключаем шаги регистрации из проверки
        if current_state in ["Registration:waiting_for_name", "Registration:waiting_for_birth_date"]:
            return await handler(event, data)

        # Исключаем команды /start и кнопку старта
        if isinstance(event, Message):
            if event.text == "/start" or event.text == "🚀 Начать":
                return await handler(event, data)

        # Проверяем регистрацию
        try:
            registered = user_exists(telegram_id)
        except Exception:
            # В случае ошибки Supabase (например, если нет подключения), пропускаем,
            # чтобы не ломать бота
            registered = True

        if not registered:
            from keyboards.reply import start_keyboard
            from handlers.start import WELCOME_TEXT

            msg_text = (
                "⚠️ <b>Для продолжения работы вам необходимо пройти регистрацию!</b>\n\n"
                f"{WELCOME_TEXT}"
            )
            if isinstance(event, Message):
                await event.answer(msg_text, parse_mode="HTML", reply_markup=start_keyboard)
            elif isinstance(event, CallbackQuery):
                await event.message.answer(msg_text, parse_mode="HTML", reply_markup=start_keyboard)
                await event.answer()
            return

        return await handler(event, data)

