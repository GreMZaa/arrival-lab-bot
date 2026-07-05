# Arrival Lab — Инструкция по настройке

## 1. Подготовка окружения

```bash
# Клонируйте репозиторий
git clone <URL>
cd "Arrival Lab"

# Создайте виртуальное окружение
python -m venv venv

# Активируйте (Windows)
venv\Scripts\activate

# Активируйте (macOS/Linux)
source venv/bin/activate

# Установите зависимости
pip install -r requirements.txt
```

## 2. Создайте Telegram-бота

1. Откройте [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте `/newbot`
3. Задайте имя бота (например: `Arrival Lab Bot`)
4. Задайте username (например: `arrival_lab_bot`)
5. Скопируйте полученный **токен**

## 3. Настройте Supabase

1. Зарегистрируйтесь на [supabase.com](https://supabase.com)
2. Создайте новый проект
3. В SQL Editor выполните содержимое файла `supabase_schema.sql`
4. Скопируйте **Project URL** и **anon (public) key** из Settings → API

## 4. Настройте Google Sheets

### 4.1. Создайте таблицу

1. Создайте новую Google Таблицу
2. Создайте **3 листа** с названиями:
   - `Пользователи` (заголовки: Telegram ID, Username, Имя, Дата рождения, Дата регистрации)
   - `Покупки` (заголовки: Telegram ID, Username, Имя, Программа, Стоимость, Дата оплаты)
   - `Заявки` (заголовки: Telegram ID, Username, ФИО, Дата рождения, О себе, Дата подачи)
3. Скопируйте **ID таблицы** из URL (строка между `/d/` и `/edit`)

### 4.2. Создайте сервисный аккаунт Google

1. Перейдите в [Google Cloud Console](https://console.cloud.google.com)
2. Создайте проект (или выберите существующий)
3. Включите **Google Sheets API** и **Google Drive API** (APIs & Services → Enabled APIs)
4. Перейдите в IAM & Admin → Service Accounts
5. Создайте сервисный аккаунт
6. Создайте для него **JSON-ключ** (Keys → Add Key → JSON)
7. Скачанный файл переименуйте в `credentials.json` и положите в корень проекта
8. **Важно:** откройте `credentials.json` и скопируйте email сервисного аккаунта (поле `client_email`)
9. Откройте вашу Google Таблицу → Настройки доступа → Добавьте email сервисного аккаунта с правами **Редактор**

## 5. Настройте .env

Скопируйте шаблон и заполните:

```bash
cp .env.example .env
```

Отредактируйте `.env`:

```env
BOT_TOKEN=ваш_токен_от_BotFather
ADMIN_CHAT_ID=ваш_telegram_id  # ID вашего аккаунта (можно узнать у @userinfobot)

SUPABASE_URL=https://ваш-проект.supabase.co
SUPABASE_ANON_KEY=ваш_anon_key

GOOGLE_SHEETS_SPREADSHEET_ID=id_вашей_таблицы
GOOGLE_SERVICE_ACCOUNT_FILE=credentials.json
```

## 6. Запустите бота

```bash
python bot.py
```

В логах вы должны увидеть: `Бот Arrival Lab запущен`

## 7. Определите ADMIN_CHAT_ID

1. Запустите бота
2. Откройте бота в Telegram и отправьте `/start`
3. В консоли (или в логах) будет видно сообщение с вашим ID
4. Альтернативно: напишите [@userinfobot](https://t.me/userinfobot) в Telegram — он покажет ваш ID
5. Впишите этот ID в `.env` как `ADMIN_CHAT_ID`
6. Перезапустите бота

## Структура проекта

```
Arrival Lab/
├── bot.py                   # Точка входа
├── config.py                # Конфигурация (.env)
├── requirements.txt         # Зависимости
├── .env                     # Секретные переменные (НЕ коммитить!)
├── .env.example             # Шаблон .env
├── credentials.json          # Google сервисный аккаунт (НЕ коммитить!)
├── supabase_schema.sql      # SQL для создания таблиц
├── SETUP.md                 # Этот файл
│
├── keyboards/               # Клавиатуры Telegram
│   ├── reply.py            # Основное меню (ReplyKeyboard)
│   └── inline.py           # Кнопки программ (InlineKeyboard)
│
├── handlers/                # Обработчики сообщений
│   ├── start.py            # /start — приветствие
│   ├── registration.py     # Регистрация (имя, дата рождения)
│   ├── programs.py         # Главное меню + описание программ
│   ├── payment.py          # Заглушка оплаты
│   └── agency.py           # Анкета агентства
│
├── middlewares/
│   └── db.py               # Supabase middleware
│
├── services/                # Интеграции
│   ├── supabase_service.py # CRUD Supabase
│   ├── sheets_service.py   # Запись в Google Sheets
│   └── admin_notifier.py   # Уведомления админу
│
└── states/
    └── form_states.py      # FSM-состояния
```
