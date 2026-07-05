from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton


def program_actions(program_key: str) -> InlineKeyboardMarkup:
    """Клавиатура под описанием программы.

    program_key — идентификатор программы (start, platform_pro, launch, restart, agency).
    """
    if program_key == "agency":
        return InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="📝 Подать заявку", callback_data=f"agency_apply")],
                [InlineKeyboardButton(text="🏠 Главное меню", callback_data="main_menu")],
            ]
        )

    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="💳 Купить программу", callback_data=f"buy_{program_key}")],
            [InlineKeyboardButton(text="🏠 Главное меню", callback_data="main_menu")],
        ]
    )


def confirm_purchase(program_key: str) -> InlineKeyboardMarkup:
    """Подтверждение покупки программы."""
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="💳 Перейти к оплате", callback_data=f"pay_{program_key}")],
            [InlineKeyboardButton(text="🏠 Главное меню", callback_data="main_menu")],
        ]
    )
