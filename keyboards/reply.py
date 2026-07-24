from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

# ── Главное меню ──────────────────────────────────────────

main_menu = ReplyKeyboardMarkup(
    keyboard=[
        [
            KeyboardButton(text="🔮 Подобрать программу (Квиз)"),
        ],
        [
            KeyboardButton(text="💎 Тарифы и программы"),
        ],
        [
            KeyboardButton(text="👤 Личный кабинет"),
            KeyboardButton(text="💬 Техподдержка"),
        ],
    ],
    resize_keyboard=True,
)

# ── Навигация ─────────────────────────────────────────────

back_to_menu = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="🏠 Главное меню")],
    ],
    resize_keyboard=True,
)

start_keyboard = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="🚀 Начать")],
    ],
    resize_keyboard=True,
)

