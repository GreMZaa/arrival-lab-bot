import gspread
from google.oauth2.service_account import Credentials

from config import GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_FILE

_scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]

_client: gspread.Client | None = None
_spreadsheet: gspread.Spreadsheet | None = None


def _get_sheet(sheet_name: str) -> gspread.Worksheet:
    """Ленивая инициализация клиента + получение листа."""
    global _client, _spreadsheet
    if _client is None:
        creds = Credentials.from_service_account_file(
            GOOGLE_SERVICE_ACCOUNT_FILE, scopes=_scopes
        )
        _client = gspread.authorize(creds)
        _spreadsheet = _client.open_by_key(GOOGLE_SHEETS_SPREADSHEET_ID)
    return _spreadsheet.worksheet(sheet_name)


# ── Лист «Пользователи» ──────────────────────────────────

def append_user(
    telegram_id: int,
    username: str | None,
    first_name: str,
    birth_date: str,
    registered_at: str,
) -> None:
    sheet = _get_sheet("Пользователи")
    sheet.append_row(
        [telegram_id, username or "", first_name, birth_date, registered_at],
        value_input_option="USER_ENTERED",
    )


# ── Лист «Покупки» ────────────────────────────────────────

def append_purchase(
    telegram_id: int,
    username: str | None,
    first_name: str,
    program_name: str,
    price: str,
    paid_at: str,
) -> None:
    sheet = _get_sheet("Покупки")
    sheet.append_row(
        [telegram_id, username or "", first_name, program_name, price, paid_at],
        value_input_option="USER_ENTERED",
    )


# ── Лист «Заявки» ─────────────────────────────────────────

def append_application(
    telegram_id: int,
    username: str | None,
    full_name: str,
    birth_date: str,
    about: str,
    submitted_at: str,
) -> None:
    sheet = _get_sheet("Заявки")
    sheet.append_row(
        [telegram_id, username or "", full_name, birth_date, about, submitted_at],
        value_input_option="USER_ENTERED",
    )
