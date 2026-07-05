from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

# ── Главное меню ──────────────────────────────────────────

main_menu = ReplyKeyboardMarkup(
    keyboard=[
        [
            KeyboardButton(text="🚀 Хочу всё настроить без технических сложностей"),
        ],
        [
            KeyboardButton(text="🔞 Хочу работать на специализированных платформах (18+)"),
        ],
        [
            KeyboardButton(text="⚙️ Хочу, чтобы вы всё настроили за меня"),
        ],
        [
            KeyboardButton(text="🎥 Уже стримлю и хочу перейти в виртуальный формат"),
        ],
        [
            KeyboardButton(text="🤝 Хочу работать с вашим агентством"),
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

