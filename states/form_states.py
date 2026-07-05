from aiogram.fsm.state import State, StatesGroup


class Registration(StatesGroup):
    """Состояния регистрации пользователя."""
    waiting_for_name = State()
    waiting_for_birth_date = State()


class Agency(StatesGroup):
    """Состояния анкеты агентства."""
    waiting_for_full_name = State()
    waiting_for_birth_date = State()
    waiting_for_about = State()
