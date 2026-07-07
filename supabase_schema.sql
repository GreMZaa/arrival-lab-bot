-- Arrival Lab — Supabase Database Schema
-- Выполните этот SQL в Supabase Dashboard → SQL Editor

-- Пользователи бота
CREATE TABLE IF NOT EXISTS users (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    telegram_id BIGINT UNIQUE NOT NULL,
    username    TEXT,
    first_name  TEXT NOT NULL,
    birth_date  DATE,
    registered_at TIMESTAMPTZ DEFAULT now()
);

-- Покупки программ
CREATE TABLE IF NOT EXISTS purchases (
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id       BIGINT REFERENCES users(id) ON DELETE SET NULL,
    telegram_id   BIGINT NOT NULL,
    program_name  TEXT NOT NULL,
    price         NUMERIC(10, 2) NOT NULL,
    paid_at       TIMESTAMPTZ DEFAULT now(),
    status        TEXT NOT NULL DEFAULT 'pending'
);

-- Заявки в агентство
CREATE TABLE IF NOT EXISTS agency_applications (
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id       BIGINT REFERENCES users(id) ON DELETE SET NULL,
    telegram_id   BIGINT NOT NULL,
    full_name     TEXT NOT NULL,
    birth_date    DATE,
    about         TEXT,
    submitted_at  TIMESTAMPTZ DEFAULT now(),
    status        TEXT NOT NULL DEFAULT 'pending'
);

-- Индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_users_telegram_id ON users(telegram_id);
CREATE INDEX IF NOT EXISTS idx_purchases_telegram_id ON purchases(telegram_id);
CREATE INDEX IF NOT EXISTS idx_applications_telegram_id ON agency_applications(telegram_id);

-- Состояния пользователей для FSM (Cloudflare Workers)
CREATE TABLE IF NOT EXISTS user_states (
    telegram_id BIGINT PRIMARY KEY,
    state       TEXT NOT NULL,
    data        JSONB DEFAULT '{}'::jsonb,
    updated_at  TIMESTAMPTZ DEFAULT now()
);

-- События воронки на сайте (конверсии, A/B-тесты)
CREATE TABLE IF NOT EXISTS site_events (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    session_id  TEXT NOT NULL,
    event_type  TEXT NOT NULL,
    details     JSONB DEFAULT '{}'::jsonb,
    created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_site_events_session_id ON site_events(session_id);
CREATE INDEX IF NOT EXISTS idx_site_events_event_type ON site_events(event_type);

