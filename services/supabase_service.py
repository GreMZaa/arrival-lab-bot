from datetime import datetime, date
from supabase import create_client, Client

from config import SUPABASE_URL, SUPABASE_ANON_KEY

supabase: Client = create_client(SUPABASE_URL, SUPABASE_ANON_KEY)


# ── Пользователи ──────────────────────────────────────────

def user_exists(telegram_id: int) -> bool:
    """Проверяет, зарегистрирован ли пользователь."""
    resp = (
        supabase.table("users")
        .select("id", count="exact")
        .eq("telegram_id", telegram_id)
        .execute()
    )
    return resp.count > 0


def save_user(
    telegram_id: int,
    username: str | None,
    first_name: str,
    birth_date: date,
) -> dict:
    """Создаёт запись пользователя."""
    return (
        supabase.table("users")
        .insert({
            "telegram_id": telegram_id,
            "username": username,
            "first_name": first_name,
            "birth_date": birth_date.isoformat(),
        })
        .execute()
        .data[0]
    )


def get_user(telegram_id: int) -> dict | None:
    """Возвращает данные пользователя по telegram_id."""
    resp = (
        supabase.table("users")
        .select("*")
        .eq("telegram_id", telegram_id)
        .maybe_single()
        .execute()
    )
    return resp.data


# ── Покупки ──────────────────────────────────────────────

def save_purchase(
    telegram_id: int,
    program_name: str,
    price: float,
) -> dict:
    """Создаёт запись о покупке."""
    return (
        supabase.table("purchases")
        .insert({
            "telegram_id": telegram_id,
            "program_name": program_name,
            "price": price,
            "status": "paid",
        })
        .execute()
        .data[0]
    )


# ── Заявки в агентство ────────────────────────────────────

def save_application(
    telegram_id: int,
    full_name: str,
    birth_date: date,
    about: str,
) -> dict:
    """Создаёт заявку в агентство."""
    return (
        supabase.table("agency_applications")
        .insert({
            "telegram_id": telegram_id,
            "full_name": full_name,
            "birth_date": birth_date.isoformat(),
            "about": about,
        })
        .execute()
        .data[0]
    )
