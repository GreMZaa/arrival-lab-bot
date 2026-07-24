const WELCOME_TEXT = `👋 <b>Добро пожаловать в Oriva Lab!</b>\n\nЯ — Oriva, цифровой консультант лаборатории цифровых моделей.\n\nЯ помогу подобрать программу именно под вашу цель.\nЭто займет меньше минуты.`;

const startKeyboard = {
  keyboard: [
    [{ text: "🚀 Начать" }]
  ],
  resize_keyboard: true,
  one_time_keyboard: false
};

const mainMenuKeyboard = {
  keyboard: [
    [{ text: "🔮 Подобрать программу (Квиз)" }],
    [{ text: "💎 Тарифы и программы" }],
    [{ text: "👤 Личный кабинет" }, { text: "💬 Техподдержка" }]
  ],
  resize_keyboard: true,
  one_time_keyboard: false
};

const QUIZ_STEP_1 = {
  text: "🔮 <b>Подбор программы — Шаг 1 из 4</b>\n\nКаков ваш текущий статус в стриминге?",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🆕 Я только начинаю (запуск с нуля)", callback_data: "quiz_ans_exp_new" }],
      [{ text: "📹 Уже стримлю с веб-камерой (переход на VTuber)", callback_data: "quiz_ans_exp_cam" }]
    ]
  }
};

const QUIZ_STEP_2 = {
  text: "🔮 <b>Подбор программы — Шаг 2 из 4</b>\n\nНа каких платформах вы планируете стримить?",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🌐 Популярные (YouTube, Twitch, Kick, VK)", callback_data: "quiz_ans_goal_public" }],
      [{ text: "🔞 Специализированные (18+ / Анонимно)", callback_data: "quiz_ans_goal_anonymous" }]
    ]
  }
};

const QUIZ_STEP_3 = {
  text: "🔮 <b>Подбор программы — Шаг 3 из 4</b>\n\nКакая модель персонажа вас интересует?",
  reply_markup: {
    inline_keyboard: [
      [{ text: "📄 Без модели (только инструкции)", callback_data: "quiz_ans_budget_none" }],
      [{ text: "🎨 2D Live2D модель (аниме-стиль)", callback_data: "quiz_ans_budget_2d" }],
      [{ text: "🧊 3D VRM модель (3D-трекинг)", callback_data: "quiz_ans_budget_3d" }]
    ]
  }
};

const QUIZ_STEP_4 = {
  text: "🔮 <b>Подбор программы — Шаг 4 из 4</b>\n\nНужна ли вам личная помощь в настройке?",
  reply_markup: {
    inline_keyboard: [
      [{ text: "📖 Настрою всё сам по инструкциям", callback_data: "quiz_ans_hardware_self" }],
      [{ text: "👑 Хочу полное сопровождение под ключ", callback_data: "quiz_ans_hardware_premium" }]
    ]
  }
};

const programsKeyboard = {
  inline_keyboard: [
    [{ text: "🟢 АРХИВ 002 — базовый (14 900 ₽)", callback_data: "info_archive_002_basic" }],
    [{ text: "🔵 АРХИВ 002 + 2D (29 900 ₽)", callback_data: "info_archive_002_2d" }],
    [{ text: "🔵 АРХИВ 002 + 3D (34 900 ₽)", callback_data: "info_archive_002_3d" }],
    [{ text: "🟣 АРХИВ 002 PREMIUM (49 900 ₽)", callback_data: "info_archive_002_premium" }],
    [{ text: "🔞 АРХИВ 003 (от 59 900 ₽)", callback_data: "info_archive_003" }],
    [{ text: "🔄 АРХИВ 004 — РЕСТАРТ (39 900 ₽)", callback_data: "info_archive_004" }],
    [{ text: "🤝 Работать с нами (15% от дохода)", callback_data: "info_agency" }]
  ]
};

const PROGRAMS = {
  archive_002_basic: {
    title: "🟢 АРХИВ 002 — базовый\nБазовый запуск с нуля",
    price: "14 900 ₽",
    items: [
      "Полный архив: 8 этапов + доп. раздел (28 страниц)",
      "Пошаговый запуск — оборудование, образ, OBS, первый эфир, платформы",
      "Чек-листы, глоссарий, разбор частых ошибок",
      "Поддержка 24/7",
      "Скидка 50% на готовую модель",
      "Без личного сопровождения",
      "Без модели в подарок"
    ],
    result: "Пошаговое руководство по самостоятельному запуску VTuber с нуля. Доступный по цене вход в профессию."
  },
  archive_002_2d: {
    title: "🔵 АРХИВ 002 + 2D\nАрхив + 2D-аватар",
    price: "29 900 ₽",
    items: [
      "Всё из базового архива",
      "Скидка 50% на создание 2D-аватара",
      "Помощь с полной сборкой — от заказа до настройки в софте",
      "Без личного сопровождения по запуску",
      "Без модели в подарок"
    ],
    result: "Всё из базового архива плюс создание индивидуального 2D-персонажа со скидкой 50%."
  },
  archive_002_3d: {
    title: "🔵 АРХИВ 002 + 3D\nАрхив + 3D-аватар",
    price: "34 900 ₽",
    items: [
      "Всё из базового архива",
      "Скидка 50% на создание 3D/VRM-модели",
      "Помощь с полной сборкой — от заказа до настройки в софте",
      "Без личного сопровождения по запуску",
      "Без модели в подарок"
    ],
    result: "Всё из базового архива плюс создание 3D/VRM-модели со скидкой 50%."
  },
  archive_002_premium: {
    title: "🟣 АРХИВ 002 PREMIUM\nПолное сопровождение",
    price: "49 900 ₽",
    items: [
      "Всё из базового архива",
      "Личное сопровождение — проходим все настройки вместе",
      "Помогаем скачать и настроить все программы",
      "Помощь с нишей и стратегией первых эфиров",
      "2D или 3D модель — в подарок",
      "Полный запуск с готовым планом на первую неделю"
    ],
    result: "Личное сопровождение до первого эфира. Мы настраиваем всё за вас, а модель вы получаете в подарок."
  },
  archive_003: {
    title: "🔞 АРХИВ 003\nСпециализированный доступ",
    price: "от 59 900 ₽",
    items: [
      "Полный архив: 19 разделов, паспорт профессии, план на первую неделю",
      "Полный путь: анонимность, оборудование, платформы, финансы, образ, доход, юридика",
      "Готовый промпт для создания паспорта персонажа",
      "Чек-листы к каждому разделу",
      "Поддержка 24/7",
      "Скидка 50% на создание 3D/VRM-модели",
      "Мы помогаем полностью собрать модель — от заказа до настройки в софте"
    ],
    result: "Полный архив и сопровождение по запуску на специализированных площадках с соблюдением полной анонимности."
  },
  archive_004: {
    title: "🔄 АРХИВ 004 — РЕСТАРТ\nПереход на виртуальный формат",
    price: "39 900 ₽",
    items: [
      "Полный архив: 24 страницы, 6 фаз перехода",
      "Финансовый план перехода (3 сценария + рекомендованный план на 4 месяца)",
      "Готовый промпт для генерации персонажа-аватара",
      "Инструкция по OBS + VTube Studio с шаблоном сцен и переходов",
      "Готовые шаблоны: объявление для аудитории, Tip Menu, чек-лист точек остановки",
      "Реалистичная статистика по росту зрителей и дохода",
      "Глоссарий терминов",
      "Поддержка 24/7",
      "Готовая VRM-модель"
    ],
    result: "Инструкция и сопровождение по переходу с веб-камеры на виртуальный формат (VTuber) без потери аудитории."
  },
  agency: {
    title: "🤝 Работать с нами\nАгентская программа",
    price: "15% от вашего дохода",
    extra: "Работа осуществляется только после рассмотрения заявки.",
    items: [
      "Даем вам полную программу",
      "Подбираем для вас вашу модель",
      "Прописываем характеристики персонажа",
      "Берем с этого 15%"
    ],
    result: "Пользователь получает полную программу, подбор модели и сопровождение за 15% от дохода."
  }
};

const BUTTON_TO_KEY = {
  "🟢 Хочу базовый запуск с нуля": "archive_002_basic",
  "🔵 Хочу запуск с 2D-моделью": "archive_002_2d",
  "🔵 Хочу запуск с 3D-моделью": "archive_002_3d",
  "🟣 Хочу личное сопровождение (Premium)": "archive_002_premium",
  "🔞 Хочу работать на спец. платформах (18+)": "archive_003",
  "🔄 Уже стримлю, хочу перейти на VTuber": "archive_004",
  "🤝 Хочу работать с вашим агентством": "agency"
};

const KEY_TO_NAME = {
  archive_002_basic: "АРХИВ 002 — базовый",
  archive_002_2d: "АРХИВ 002 + 2D",
  archive_002_3d: "АРХИВ 002 + 3D",
  archive_002_premium: "АРХИВ 002 PREMIUM",
  archive_003: "АРХИВ 003",
  archive_004: "АРХИВ 004 — РЕСТАРТ",
  agency: "ORIVA TALENTS"
};

const KEY_TO_PRICE = {
  archive_002_basic: 14900,
  archive_002_2d: 29900,
  archive_002_3d: 34900,
  archive_002_premium: 49900,
  archive_003: 59900,
  archive_004: 39900,
  agency: 0
};

function formatProgram(key) {
  const p = PROGRAMS[key];
  let lines = [`<b>${p.title}</b>`, `\n💰 Стоимость: ${p.price}\n`];

  if (p.extra) {
    lines.push(`ℹ️ ${p.extra}\n`);
  }

  lines.push("Что входит:");
  for (const item of p.items) {
    if (item === "Всё из START" || item === "Всё из LAUNCH") {
      lines.push(`  ➕ ${item}`);
    } else {
      lines.push(`  ✅ ${item}`);
    }
  }

  lines.push(`\n🎯 <b>Результат:</b>\n${p.result}`);
  return lines.join("\n");
}

function programActions(programKey) {
  if (programKey === "agency") {
    return {
      inline_keyboard: [
        [{ text: "📝 Подать заявку", callback_data: "agency_apply" }],
        [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
      ]
    };
  }
  if (programKey === "start") {
    return {
      inline_keyboard: [
        [{ text: "📥 Скачать программу", callback_data: "download_start" }],
        [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
      ]
    };
  }
  return {
    inline_keyboard: [
      [{ text: "💳 Купить программу", callback_data: `buy_${programKey}` }],
      [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
    ]
  };
}

function confirmPurchase(programKey) {
  const PAYWALL_URL = "https://paywall.ru/arrivalab";
  return {
    inline_keyboard: [
      [{ text: "💳 Оплатить программу", url: PAYWALL_URL }],
      [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
    ]
  };
}

const adminMenuKeyboard = {
  inline_keyboard: [
    [
      { text: "📊 Статистика", callback_data: "admin_stats" }
    ],
    [
      { text: "📝 Последние заявки", callback_data: "admin_apps" },
      { text: "💳 Последние заказы", callback_data: "admin_purchases" }
    ]
  ]
};

const ADMIN_WELCOME = `⚡️ <b>Панель администратора Oriva Lab</b>\n\nДобро пожаловать в панель управления. Выберите нужное действие на клавиатуре ниже:`;

async function dbCount(env, table) {
  const data = await dbQuery(env, table, "GET");
  return data.length;
}


function parseDate(text) {
  // Split by any sequence of non-digit characters
  const parts = text.trim().split(/[^\d]+/);
  if (parts.length !== 3) return null;
  
  let day, month, year;
  
  // If the first part is 4 digits (e.g. YYYY.MM.DD)
  if (parts[0].length === 4) {
    year = parseInt(parts[0], 10);
    month = parseInt(parts[1], 10);
    day = parseInt(parts[2], 10);
  } else {
    // Standard format (DD.MM.YYYY)
    day = parseInt(parts[0], 10);
    month = parseInt(parts[1], 10);
    year = parseInt(parts[2], 10);
  }
  
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
  
  // Handle 2-digit years (e.g. 20 -> 2020, 95 -> 1995)
  if (year >= 0 && year < 100) {
    const currentYearShort = new Date().getFullYear() % 100;
    if (year <= currentYearShort) {
      year += 2000;
    } else {
      year += 1900;
    }
  }
  
  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
    return null;
  }
  
  // Validate actual date existence (e.g. February 30th)
  const dateObj = new Date(year, month - 1, day);
  if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month - 1 || dateObj.getDate() !== day) {
    return null;
  }
  
  const mm = month < 10 ? `0${month}` : `${month}`;
  const dd = day < 10 ? `0${day}` : `${day}`;
  return `${year}-${mm}-${dd}`;
}

// ── Supabase REST API Client ──────────────────────────────

async function dbQuery(env, table, method, queryParams = {}, body = null) {
  const url = new URL(`${env.SUPABASE_URL}/rest/v1/${table}`);
  for (const [k, v] of Object.entries(queryParams)) {
    url.searchParams.set(k, v);
  }
  
  const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  const headers = {
    "apikey": supabaseKey,
    "Authorization": `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  };
  
  const options = {
    method: method,
    headers: headers,
    // Prevent Cloudflare Workers from caching Supabase responses
    cf: { cacheEverything: false, cacheTtl: 0 }
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  const res = await fetch(url.toString(), options);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Supabase error on ${method} ${table}: ${res.status} ${errorText}`);
  }
  return await res.json();
}

async function userExists(env, telegramId) {
  const data = await dbQuery(env, "users", "GET", { "telegram_id": `eq.${telegramId}` });
  return data.length > 0;
}

async function saveUser(env, telegramId, username, firstName, birthDate) {
  const data = await dbQuery(env, "users", "POST", {}, {
    telegram_id: telegramId,
    username: username || null,
    first_name: firstName,
    birth_date: birthDate
  });
  return data[0];
}

async function savePurchase(env, telegramId, programName, price) {
  // Try to find local user ID in DB first
  const users = await dbQuery(env, "users", "GET", { "telegram_id": `eq.${telegramId}` });
  const userId = users.length > 0 ? users[0].id : null;
  
  return await dbQuery(env, "purchases", "POST", {}, {
    user_id: userId,
    telegram_id: telegramId,
    program_name: programName,
    price: price,
    status: "pending"
  });
}

async function saveApplication(env, telegramId, fullName, birthDate, about) {
  const users = await dbQuery(env, "users", "GET", { "telegram_id": `eq.${telegramId}` });
  const userId = users.length > 0 ? users[0].id : null;
  
  return await dbQuery(env, "agency_applications", "POST", {}, {
    user_id: userId,
    telegram_id: telegramId,
    full_name: fullName,
    birth_date: birthDate,
    about: about,
    status: "pending"
  });
}

async function getUserState(env, telegramId) {
  const data = await dbQuery(env, "user_states", "GET", { "telegram_id": `eq.${telegramId}` });
  return data.length > 0 ? data[0] : null;
}

async function saveUserState(env, telegramId, state, stateData = {}) {
  const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  const headers = {
    "apikey": supabaseKey,
    "Authorization": `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
    "Prefer": "resolution=merge-duplicates,return=representation"
  };
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/user_states`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      telegram_id: telegramId,
      state: state,
      data: stateData,
      updated_at: new Date().toISOString()
    })
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Supabase user_states upsert error: ${res.status} ${errorText}`);
  }
  return await res.json();
}

async function deleteUserState(env, telegramId) {
  const res = await dbQuery(env, "user_states", "DELETE", { "telegram_id": `eq.${telegramId}` });
  return res;
}

// ── Telegram API Client ─────────────────────────────────

async function sendTelegramRequest(env, method, payload) {
  const url = `https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Telegram API error on ${method}: ${res.status} ${errorText}`);
    return { ok: false, error: errorText };
  }
  return await res.json();
}

// ── Google Sheets API Client ────────────────────────────

async function getGoogleAuthToken(serviceAccountJson) {
  const privateKey = serviceAccountJson.private_key;
  const clientEmail = serviceAccountJson.client_email;
  
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };
  
  function b64(obj) {
    const str = JSON.stringify(obj);
    const bytes = new TextEncoder().encode(str);
    return btoa(String.fromCharCode(...bytes)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  
  const tokenInput = `${b64(header)}.${b64(claim)}`;
  
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = privateKey.substring(
    privateKey.indexOf(pemHeader) + pemHeader.length,
    privateKey.indexOf(pemFooter)
  ).replace(/\s/g, "");
  
  const binaryDerString = atob(pemContents);
  const binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }
  
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: { name: "SHA-256" }
    },
    false,
    ["sign"]
  );
  
  const signatureBuffer = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(tokenInput)
  );
  
  const signatureBytes = new Uint8Array(signatureBuffer);
  const signatureB64 = btoa(String.fromCharCode(...signatureBytes)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  
  const assertion = `${tokenInput}.${signatureB64}`;
  
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${assertion}`
  });
  
  if (!response.ok) {
    throw new Error(`Google Auth failed: ${response.status} ${await response.text()}`);
  }
  
  const data = await response.json();
  return data.access_token;
}

async function appendGoogleSheetRow(env, sheetName, rowValues) {
  if (!env.GOOGLE_SERVICE_ACCOUNT_JSON || !env.GOOGLE_SHEETS_SPREADSHEET_ID) {
    console.warn("Google Sheets credentials are not configured.");
    return;
  }
  try {
    const serviceAccount = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const token = await getGoogleAuthToken(serviceAccount);
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEETS_SPREADSHEET_ID}/values/${encodeURIComponent(sheetName)}:append?valueInputOption=USER_ENTERED`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        values: [rowValues]
      })
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error(`Google Sheets append failed: ${res.status} ${errText}`);
    }
  } catch (e) {
    console.error(`Google Sheets service error: ${e.message}`);
  }
}

// ── Admin Notifier Helpers ──────────────────────────────

async function notifyNewUser(env, telegramId, username, firstName, birthDate) {
  const text = `👤 <b>Новый пользователь</b>\n\nID: <code>${telegramId}</code>\nUsername: @${username || "нет"}\nИмя: ${firstName}\nДата рождения: ${birthDate}`;
  await sendTelegramRequest(env, "sendMessage", { chat_id: env.ADMIN_CHAT_ID, text: text, parse_mode: "HTML" }).catch(() => {});
}

async function notifyNewPurchase(env, telegramId, username, firstName, programName, price) {
  const text = `📝 <b>Заявка на программу</b>\n\nID: <code>${telegramId}</code>\nUsername: @${username || "нет"}\nИмя: ${firstName}\nПрограмма: ${programName}\nСтоимость: ${price}`;
  await sendTelegramRequest(env, "sendMessage", { chat_id: env.ADMIN_CHAT_ID, text: text, parse_mode: "HTML" }).catch(() => {});
}

async function notifyNewApplication(env, telegramId, username, fullName) {
  const text = `📝 <b>Новая заявка в агентство</b>\n\n🔹 ФИО: <b>${fullName}</b>\n🆔 ID: <code>${telegramId}</code>\n👤 Username: @${username || "нет"}\n\n🟡 Статус: <b>Ожидает рассмотрения</b>\n\nОткройте админ-панель чтобы принять или отклонить заявку.`;
  await sendTelegramRequest(env, "sendMessage", { chat_id: env.ADMIN_CHAT_ID, text: text, parse_mode: "HTML" }).catch(() => {});
}

// ── Update Handlers ─────────────────────────────────────

async function handleMessage(message, env, host) {
  const telegramId = message.from.id;
  const rawText = message.text ? message.text.trim() : "";
  // Strip bot mention from commands (e.g. /admin@BotName -> /admin)
  const text = rawText.replace(/^(\/[a-zA-Z0-9_]+)@[a-zA-Z0-9_]+/, '$1');
  const username = message.from.username;
  const firstName = message.from.first_name || "";
  const workerHost = host || "https://arrival-lab-bot.succinct-drain.workers.dev";
  
  console.log(`[debug] handleMessage text="${text}" chat_id=${message.chat.id} from_id=${telegramId}`);
  
  if (text === "/admin") {
    const isAuthorized = String(message.chat.id) === String(env.ADMIN_CHAT_ID) || String(telegramId) === "405845462" || String(telegramId) === "405845462";
    console.log(`[debug] isAuthorized=${isAuthorized} ADMIN_CHAT_ID=${env.ADMIN_CHAT_ID}`);
    if (!isAuthorized) {
      console.log(`[debug] Not authorized, returning`);
      return;
    }
    const isGroup = message.chat.type === "group" || message.chat.type === "supergroup";
    const adminKeyboard = {
      inline_keyboard: [
        [
          isGroup
            ? { text: "🖥 Открыть веб-админку", url: `${workerHost}/admin-panel?token=OrivaLabSecretToken` }
            : { text: "🖥 Открыть веб-админку", web_app: { url: `${workerHost}/admin-panel` } }
        ],
        [
          { text: "📊 Статистика", callback_data: "admin_stats" }
        ],
        [
          { text: "📝 Последние заявки", callback_data: "admin_apps" },
          { text: "💳 Последние заказы", callback_data: "admin_purchases" }
        ]
      ]
    };
    console.log(`[debug] sending Telegram sendMessage request...`);
    const resp = await sendTelegramRequest(env, "sendMessage", {
      chat_id: message.chat.id,
      text: ADMIN_WELCOME,
      parse_mode: "HTML",
      reply_markup: adminKeyboard
    });
    console.log(`[debug] Telegram response:`, JSON.stringify(resp));
    return;
  }
  
  if (text.startsWith("/start")) {
    const parts = text.split(" ");
    const arg = parts.length > 1 ? parts[1] : null;
    
    const registered = await userExists(env, telegramId);
    if (!registered) {
      await saveUserState(env, telegramId, "Registration:waiting_for_name", { referral_arg: arg });
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: telegramId,
        text: "Как вас зовут?",
        reply_markup: { remove_keyboard: true }
      });
      return;
    }

    if (arg) {
      if (arg === "download_start" || arg === "buy_start") {
        await sendTelegramRequest(env, "sendMessage", {
          chat_id: telegramId,
          text: "📥 <b>Скачивание программы START...</b>\n\nФайл с пошаговым руководством по установке и запуску VTuber подготавливается и будет отправлен вам прямо сейчас.",
          parse_mode: "HTML"
        });
        await sendTelegramRequest(env, "sendDocument", {
          chat_id: telegramId,
          document: "https://raw.githubusercontent.com/GreMZaa/oriva-lab-bot/master/SETUP.md",
          caption: "📖 Пошаговое руководство Oriva Lab — START.md"
        });
        await sendTelegramRequest(env, "sendMessage", {
          chat_id: telegramId,
          text: "🏠 <b>Главное меню</b>",
          reply_markup: mainMenuKeyboard
        });
        return;
      }
      
      if (arg === "agency_apply") {
        // Check if already submitted an application
        const existingApps = await dbQuery(env, "agency_applications", "GET", { "telegram_id": `eq.${telegramId}`, "limit": "1" });
        if (existingApps.length > 0) {
          const app = existingApps[0];
          const statusEmoji = app.status === 'approved' ? '✅' : app.status === 'rejected' ? '❌' : '🟡';
          const statusLabel = app.status === 'approved' ? 'Принята' : app.status === 'rejected' ? 'Отклонена' : 'На рассмотрении';
          await sendTelegramRequest(env, "sendMessage", {
            chat_id: telegramId,
            text: `📁 <b>Ваша заявка</b>\n\nСтатус: ${statusEmoji} <b>${statusLabel}</b>\n\nМы свяжемся с вами в ближайшее время.`,
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: [[{ text: "🏠 Главное меню", callback_data: "main_menu" }]] }
          });
          return;
        }
        await saveUserState(env, telegramId, "Agency:waiting_for_about");
        await sendTelegramRequest(env, "sendMessage", {
          chat_id: telegramId,
          text: "📝 <b>Анкета агентства</b>\n\nРасскажите немного о себе.\n\nНапример:\n • Есть ли у вас опыт стриминга?\n • Почему вы хотите работать с Oriva Lab?\n • Какие цели вы ставите перед собой?\n • Есть ли у вас уже виртуальный персонаж?\n\nОтвет вводится в свободной форме.",
          parse_mode: "HTML",
          reply_markup: { remove_keyboard: true }
        });
        return;
      }
      
      if (arg.startsWith("buy_")) {
        const programKey = arg.substring(4);
        if (PROGRAMS[programKey]) {
          const programText = formatProgram(programKey);
          await sendTelegramRequest(env, "sendMessage", {
            chat_id: telegramId,
            text: programText,
            parse_mode: "HTML",
            reply_markup: programActions(programKey)
          });
          return;
        }
      }
    }

    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "🏠 <b>Главное меню</b>\n\nВыберите вариант, который лучше всего подходит именно вам.",
      parse_mode: "HTML",
      reply_markup: mainMenuKeyboard
    });
    await deleteUserState(env, telegramId).catch(() => {});
    return;
  }
  
  const stateObj = await getUserState(env, telegramId);
  const state = stateObj ? stateObj.state : null;
  const stateData = stateObj ? stateObj.data : {};
  
  if (text === "🚀 Начать") {
    const registered = await userExists(env, telegramId);
    if (registered) {
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: telegramId,
        text: "Вы уже зарегистрированы!",
        reply_markup: mainMenuKeyboard
      });
      await deleteUserState(env, telegramId).catch(() => {});
      return;
    }
    const existingRefArg = stateData.referral_arg || null;
    await saveUserState(env, telegramId, "Registration:waiting_for_name", { referral_arg: existingRefArg });
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "Как вас зовут?",
      reply_markup: { remove_keyboard: true }
    });
    return;
  }
  
  const registered = await userExists(env, telegramId);
  if (!registered && !state) {
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "⚠️ <b>Для продолжения пройдите регистрацию.</b>\n\nОтправьте /start чтобы начать.",
      parse_mode: "HTML",
      reply_markup: { remove_keyboard: true }
    });
    return;
  }
  
  if (state === "Registration:waiting_for_name") {
    if (!text) {
      await sendTelegramRequest(env, "sendMessage", { chat_id: telegramId, text: "Пожалуйста, введите ваше имя." });
      return;
    }
    const existingRefArg = stateData.referral_arg || null;
    await saveUserState(env, telegramId, "Registration:waiting_for_birth_date", { first_name: text, referral_arg: existingRefArg });
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "Введите вашу дату рождения.\n\nФормат: <b>ДД.ММ.ГГГГ</b>",
      parse_mode: "HTML"
    });
    return;
  }
  
  if (state === "Registration:waiting_for_birth_date") {
    const parsedDate = parseDate(text);
    if (!parsedDate) {
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: telegramId,
        text: "⚠ Неверный формат. Пожалуйста, введите дату в формате <b>ДД.ММ.ГГГГ</b>.",
        parse_mode: "HTML"
      });
      return;
    }
    
    const firstNameVal = stateData.first_name;
    const refArg = stateData.referral_arg;
    const now = new Date().toISOString();
    
    await saveUser(env, telegramId, username, firstNameVal, parsedDate);
    await deleteUserState(env, telegramId);
    
    await appendGoogleSheetRow(env, "Пользователи", [
      telegramId,
      username || "",
      firstNameVal,
      parsedDate,
      now.replace("T", " ").substring(0, 19)
    ]);
    
    await notifyNewUser(env, telegramId, username, firstNameVal, parsedDate);
    
    // Redirect if there was a referral/deep link arg during registration
    if (refArg) {
      if (refArg === "download_start" || refArg === "buy_start") {
        await sendTelegramRequest(env, "sendMessage", {
          chat_id: telegramId,
          text: "📥 <b>Скачивание программы START...</b>\n\nФайл с пошаговым руководством по установке и запуску VTuber подготавливается и будет отправлен вам прямо сейчас.",
          parse_mode: "HTML"
        });
        await sendTelegramRequest(env, "sendDocument", {
          chat_id: telegramId,
          document: "https://raw.githubusercontent.com/GreMZaa/oriva-lab-bot/master/SETUP.md",
          caption: "📖 Пошаговое руководство Oriva Lab — START.md"
        });
        await sendTelegramRequest(env, "sendMessage", {
          chat_id: telegramId,
          text: "🏠 <b>Главное меню</b>",
          reply_markup: mainMenuKeyboard
        });
        return;
      }
      
      if (refArg === "agency_apply") {
        const existingApps = await dbQuery(env, "agency_applications", "GET", { "telegram_id": `eq.${telegramId}`, "limit": "1" });
        if (existingApps.length > 0) {
          const app = existingApps[0];
          const statusEmoji = app.status === 'approved' ? '✅' : app.status === 'rejected' ? '❌' : '🟡';
          const statusLabel = app.status === 'approved' ? 'Принята' : app.status === 'rejected' ? 'Отклонена' : 'На рассмотрении';
          await sendTelegramRequest(env, "sendMessage", {
            chat_id: telegramId,
            text: `📁 <b>Ваша заявка</b>\n\nСтатус: ${statusEmoji} <b>${statusLabel}</b>\n\nМы свяжемся с вами в ближайшее время.`,
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: [[{ text: "🏠 Главное меню", callback_data: "main_menu" }]] }
          });
          return;
        }
        await saveUserState(env, telegramId, "Agency:waiting_for_about");
        await sendTelegramRequest(env, "sendMessage", {
          chat_id: telegramId,
          text: "📝 <b>Анкета агентства</b>\n\nРасскажите немного о себе.\n\nНапример:\n • Есть ли у вас опыт стриминга?\n • Почему вы хотите работать с Oriva Lab?\n • Какие цели вы ставите перед собой?\n • Есть ли у вас уже виртуальный персонаж?\n\nОтвет вводится в свободной форме.",
          parse_mode: "HTML",
          reply_markup: { remove_keyboard: true }
        });
        return;
      }
      
      if (refArg.startsWith("buy_")) {
        const programKey = refArg.substring(4);
        if (PROGRAMS[programKey]) {
          const programText = formatProgram(programKey);
          await sendTelegramRequest(env, "sendMessage", {
            chat_id: telegramId,
            text: programText,
            parse_mode: "HTML",
            reply_markup: programActions(programKey)
          });
          return;
        }
      }
    }
    
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "<b>Отлично!</b>\n\nТеперь выберите вариант, который лучше всего подходит именно вам.",
      parse_mode: "HTML",
      reply_markup: mainMenuKeyboard
    });
    return;
  }
  
  if (
    text === "🔮 Подобрать программу (Квиз)" ||
    text === "/quiz" ||
    text.includes("Квиз") ||
    text.includes("Подобрать") ||
    text.includes("технических сложностей") ||
    text.includes("настроили за меня")
  ) {
    await saveUserState(env, telegramId, "Quiz:step1", {});
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: QUIZ_STEP_1.text,
      parse_mode: "HTML",
      reply_markup: QUIZ_STEP_1.reply_markup
    });
    return;
  }

  if (text === "💎 Тарифы и программы") {
    const msg = `💎 <b>Тарифы и программы Oriva Lab</b>\n\nВыберите интересующую вас программу ниже, чтобы узнать подробности и начать запуск:`;
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: msg,
      parse_mode: "HTML",
      reply_markup: programsKeyboard
    });
    return;
  }
  
  if (text === "💬 Техподдержка") {
    const msg = `💬 <b>Служба заботы Oriva Lab</b>\n\nВозникли вопросы по установке, настройке или оплате?\n\nНаш специалист поддержки на связи в Telegram:\n👉 <b>@success_vstream</b>\n\nНапишите нам, и мы поможем решить любой технический или организационный вопрос!`;
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: msg,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "💬 Написать в поддержку", url: "https://t.me/success_vstream" }],
          [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
        ]
      }
    });
    return;
  }
  
  if (text === "👤 Личный кабинет") {
    const users = await dbQuery(env, "users", "GET", { "telegram_id": `eq.${telegramId}`, "limit": "1" });
    if (users.length === 0) {
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: telegramId,
        text: "⚠️ Вы не зарегистрированы в системе. Нажмите /start, чтобы пройти регистрацию."
      });
      return;
    }
    const user = users[0];
    
    // Fetch orders and applications
    const purchases = await dbQuery(env, "purchases", "GET", { "telegram_id": `eq.${telegramId}`, "order": "id.desc", "limit": "5" });
    const apps = await dbQuery(env, "agency_applications", "GET", { "telegram_id": `eq.${telegramId}`, "order": "id.desc", "limit": "3" });
    
    let profileMsg = `👤 <b>Личный кабинет Oriva Lab</b>\n\n` +
      `• Имя: <b>${user.first_name || 'не указано'}</b>\n` +
      `• Telegram: @${user.username || 'не указан'}\n` +
      `• Дата рождения: ${user.birth_date || 'не указана'}\n\n`;
      
    profileMsg += `💳 <b>Последние заказы:</b>\n`;
    if (purchases.length === 0) {
      profileMsg += "  <i>Заказов пока нет</i>\n\n";
    } else {
      purchases.forEach(p => {
        const statusEmoji = p.status === 'approved' ? '✅ Оплачено' : p.status === 'rejected' ? '❌ Отклонено' : '🟡 В обработке';
        profileMsg += `  • ${p.program_name}: <b>${p.price} ₽</b> (${statusEmoji})\n`;
      });
      profileMsg += "\n";
    }
    
    profileMsg += `🤝 <b>Заявки в агентство:</b>\n`;
    if (apps.length === 0) {
      profileMsg += "  <i>Заявок пока нет</i>\n\n";
    } else {
      apps.forEach(a => {
        const statusEmoji = a.status === 'approved' ? '✅ Принята' : a.status === 'rejected' ? '❌ Отклонена' : '🟡 На рассмотрении';
        profileMsg += `  • Заявка от ${a.created_at ? a.created_at.substring(0, 10) : ''} (${statusEmoji})\n`;
      });
      profileMsg += "\n";
    }
    
    const hostUrl = workerHost || "https://arival-lab.vercel.app";
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: profileMsg,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🖥 Открыть личный кабинет на сайте", web_app: { url: `${hostUrl}/personal-cabinet?tg_id=${telegramId}` } }],
          [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
        ]
      }
    });
    return;
  }

  if (BUTTON_TO_KEY[text]) {
    const programKey = BUTTON_TO_KEY[text];
    const programText = formatProgram(programKey);
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: programText,
      parse_mode: "HTML",
      reply_markup: programActions(programKey)
    });
    return;
  }
  
  if (text === "🏠 Главное меню" || text === "/menu") {
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "🏠 <b>Главное меню</b>\n\nВыберите вариант, который лучше всего подходит именно вам.",
      parse_mode: "HTML",
      reply_markup: mainMenuKeyboard
    });
    return;
  }
  
  if (state === "Agency:waiting_for_full_name") {
    if (!text) {
      await sendTelegramRequest(env, "sendMessage", { chat_id: telegramId, text: "Пожалуйста, введите ФИО." });
      return;
    }
    await saveUserState(env, telegramId, "Agency:waiting_for_birth_date", { full_name: text });
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "Введите дату рождения.\n\nФормат: <b>ДД.ММ.ГГГГ</b>",
      parse_mode: "HTML"
    });
    return;
  }
  
  if (state === "Agency:waiting_for_birth_date") {
    const parsedDate = parseDate(text);
    if (!parsedDate) {
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: telegramId,
        text: "⚠ Неверный формат. Введите дату в формате <b>ДД.ММ.ГГГГ</b>.",
        parse_mode: "HTML"
      });
      return;
    }
    await saveUserState(env, telegramId, "Agency:waiting_for_about", {
      full_name: stateData.full_name,
      birth_date: parsedDate
    });
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "Расскажите немного о себе.\n\nНапример:\n • Есть ли у вас опыт стриминга?\n • Почему вы хотите работать с Oriva Lab?\n • Какие цели вы ставите перед собой?\n • Есть ли у вас уже виртуальный персонаж?\n\nОтвет вводится в свободной форме."
    });
    return;
  }
  
  if (state === "Agency:waiting_for_about") {
    if (!text) {
      await sendTelegramRequest(env, "sendMessage", { chat_id: telegramId, text: "Пожалуйста, расскажите о себе." });
      return;
    }
    
    // Get user's name and birth date from their registration record
    const users = await dbQuery(env, "users", "GET", { "telegram_id": `eq.${telegramId}` });
    const userRecord = users.length > 0 ? users[0] : null;
    const fullNameVal = userRecord ? userRecord.first_name : (firstName || "Неизвестно");
    const birthDateVal = userRecord ? userRecord.birth_date : null;
    const now = new Date().toISOString();
    
    await saveApplication(env, telegramId, fullNameVal, birthDateVal, text);
    await deleteUserState(env, telegramId);
    
    await appendGoogleSheetRow(env, "Заявки", [
      telegramId,
      username || "",
      fullNameVal,
      birthDateVal || "",
      text,
      now.replace("T", " ").substring(0, 19)
    ]);
    
    await notifyNewApplication(env, telegramId, username, fullNameVal);
    
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "✅ <b>Спасибо!</b>\n\nВаша заявка успешно отправлена.\nМы внимательно рассмотрим её и свяжемся с вами в ближайшее время.",
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "📁 Моя заявка", callback_data: "my_application" }],
          [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
        ]
      }
    });
    return;
  }
}

async function handleCallbackQuery(callback, env, host) {
  const telegramId = callback.from.id;
  const data = callback.data;
  const username = callback.from.username;
  const firstName = callback.from.first_name || "";
  const messageId = callback.message.message_id;
  
  const isAdmin = String(callback.message.chat.id) === String(env.ADMIN_CHAT_ID) || String(telegramId) === "405845462";
  
  if (data === "admin_main" && isAdmin) {
    const isGroup = callback.message.chat.type === "group" || callback.message.chat.type === "supergroup";
    const adminKeyboard = {
      inline_keyboard: [
        [
          isGroup
            ? { text: "🖥 Открыть веб-админку", url: `${host}/admin-panel?token=OrivaLabSecretToken` }
            : { text: "🖥 Открыть веб-админку", web_app: { url: `${host}/admin-panel` } }
        ],
        [
          { text: "📊 Статистика", callback_data: "admin_stats" }
        ],
        [
          { text: "📝 Последние заявки", callback_data: "admin_apps" },
          { text: "💳 Последние заказы", callback_data: "admin_purchases" }
        ]
      ]
    };
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: ADMIN_WELCOME,
      parse_mode: "HTML",
      reply_markup: adminKeyboard
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data === "admin_stats" && isAdmin) {
    const userCount = await dbCount(env, "users");
    const purchaseCount = await dbCount(env, "purchases");
    const appCount = await dbCount(env, "agency_applications");
    
    const text = `📊 <b>Статистика Oriva Lab</b>\n\n` +
                 `• Всего пользователей: <b>${userCount}</b>\n` +
                 `• Оформлено заказов: <b>${purchaseCount}</b>\n` +
                 `• Заявок в агентство: <b>${appCount}</b>`;
                 
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: text,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Назад", callback_data: "admin_main" }]]
      }
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data === "admin_apps" && isAdmin) {
    const apps = await dbQuery(env, "agency_applications", "GET", {
      order: "id.desc",
      limit: "3"
    });
    
    let text = `📝 <b>Последние 3 заявки в агентство</b>\n\n`;
    if (apps.length === 0) {
      text += "Заявок пока нет.";
    } else {
      apps.forEach((app, index) => {
        const statusEmoji = app.status === 'approved' ? '✅' : app.status === 'rejected' ? '❌' : '🟡';
        const statusLabel = app.status === 'approved' ? 'Принята' : app.status === 'rejected' ? 'Отклонена' : 'Ожидает';
        text += `${index + 1}. <b>${app.full_name}</b>\n` +
                `• ID: <code>${app.telegram_id}</code>\n` +
                `• Рождение: ${app.birth_date}\n` +
                `• Статус: ${statusEmoji} ${statusLabel}\n` +
                `• О себе: <i>${app.about}</i>\n\n`;
      });
    }
    
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: text,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Назад", callback_data: "admin_main" }]]
      }
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data === "admin_purchases" && isAdmin) {
    const purchases = await dbQuery(env, "purchases", "GET", {
      order: "id.desc",
      limit: "3"
    });
    
    let text = `💳 <b>Последние 3 заказа программ</b>\n\n`;
    if (purchases.length === 0) {
      text += "Заказов пока нет.";
    } else {
      purchases.forEach((p, index) => {
        text += `${index + 1}. Программа: <b>${p.program_name}</b>\n` +
                `• ID: <code>${p.telegram_id}</code>\n` +
                `• Цена: ${p.price} ₽\n` +
                `• Статус: <b>${p.status}</b>\n\n`;
      });
    }
    
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: text,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Назад", callback_data: "admin_main" }]]
      }
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data === "quiz_start") {
    await saveUserState(env, telegramId, "Quiz:step1", {});
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: QUIZ_STEP_1.text,
      parse_mode: "HTML",
      reply_markup: QUIZ_STEP_1.reply_markup
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  if (data.startsWith("quiz_ans_exp_")) {
    const expVal = data.substring(13);
    await saveUserState(env, telegramId, "Quiz:step2", { exp: expVal });
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: QUIZ_STEP_2.text,
      parse_mode: "HTML",
      reply_markup: QUIZ_STEP_2.reply_markup
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  if (data.startsWith("quiz_ans_goal_")) {
    const goalVal = data.substring(14);
    await saveUserState(env, telegramId, "Quiz:step3", { ...(stateData || {}), goal: goalVal });
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: QUIZ_STEP_3.text,
      parse_mode: "HTML",
      reply_markup: QUIZ_STEP_3.reply_markup
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  if (data.startsWith("quiz_ans_budget_")) {
    const budgetVal = data.substring(16);
    await saveUserState(env, telegramId, "Quiz:step4", { ...(stateData || {}), budget: budgetVal });
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: QUIZ_STEP_4.text,
      parse_mode: "HTML",
      reply_markup: QUIZ_STEP_4.reply_markup
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  if (data.startsWith("quiz_ans_hardware_")) {
    const hardwareVal = data.substring(18);
    const currentData = stateData || {};
    const exp = currentData.exp || 'new';
    const goal = currentData.goal || 'public';
    const budget = currentData.budget || 'none';
    const hardware = hardwareVal;

    let recommendedKey = 'archive_002_basic';

    if (exp === 'cam') {
      recommendedKey = 'archive_004';
    } else if (goal === 'anonymous') {
      recommendedKey = 'archive_003';
    } else if (hardware === 'premium') {
      recommendedKey = 'archive_002_premium';
    } else if (budget === '2d') {
      recommendedKey = 'archive_002_2d';
    } else if (budget === '3d') {
      recommendedKey = 'archive_002_3d';
    } else {
      recommendedKey = 'archive_002_basic';
    }

    await deleteUserState(env, telegramId).catch(() => {});

    const programText = formatProgram(recommendedKey);
    const resultText = `🎉 <b>Результат подбора:</b>\n\nНа основе ваших ответов мы рекомендуем следующую программу:\n\n${programText}`;
    
    const resultKeyboard = {
      inline_keyboard: [
        [{ text: "💳 Оформить программу", callback_data: `buy_${recommendedKey}` }],
        [{ text: "🔄 Пройти подбор заново", callback_data: "quiz_start" }],
        [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
      ]
    };

    await sendTelegramRequest(env, "editMessageText", {
      chat_id: callback.message.chat.id,
      message_id: messageId,
      text: resultText,
      parse_mode: "HTML",
      reply_markup: resultKeyboard
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  if (data === "main_menu") {
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: "🏠 <b>Главное меню</b>\n\nВыберите вариант, который лучше всего подходит именно вам.",
      parse_mode: "HTML"
    });
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "Выберите программу:",
      reply_markup: mainMenuKeyboard
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data.startsWith("info_")) {
    const programKey = data.substring(5);
    if (PROGRAMS[programKey]) {
      const programText = formatProgram(programKey);
      await sendTelegramRequest(env, "editMessageText", {
        chat_id: telegramId,
        message_id: messageId,
        text: programText,
        parse_mode: "HTML",
        reply_markup: programActions(programKey)
      });
    }
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  if (data.startsWith("buy_")) {
    const programKey = data.substring(4);
    if (!PROGRAMS[programKey]) {
      await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
      return;
    }
    const name = KEY_TO_NAME[programKey] || programKey.toUpperCase();
    const price = PROGRAMS[programKey].price;
    
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: `Вы выбрали программу:\n\n<b>${name}</b>\n💰 ${price}\n\nНажмите кнопку ниже, чтобы перейти к оплате. После оплаты наша команда свяжется с вами в течение 24 часов.`,
      parse_mode: "HTML",
      reply_markup: confirmPurchase(programKey)
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data === "download_start") {
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: "📥 <b>Скачивание программы START...</b>\n\nФайл с пошаговым руководством по установке и запуску VTuber подготавливается и будет отправлен вам прямо сейчас.",
      parse_mode: "HTML"
    });
    
    // Register free purchase
    const now = new Date().toISOString();
    try {
      await savePurchase(env, telegramId, "START (Free)", 0);
    } catch (e) {
      console.error("Save purchase error:", e);
    }
    
    await appendGoogleSheetRow(env, "Покупки", [
      telegramId,
      username || "",
      firstName,
      "START (Free)",
      "Бесплатно",
      now.replace("T", " ").substring(0, 19)
    ]);
    
    await notifyNewPurchase(env, telegramId, username, firstName, "START (Free)", "Бесплатно");
    
    // Send file
    await sendTelegramRequest(env, "sendDocument", {
      chat_id: telegramId,
      document: "https://raw.githubusercontent.com/GreMZaa/arrival-lab-bot/master/SETUP.md",
      caption: "📖 Пошаговое руководство Oriva Lab — START.md"
    });
    
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "🏠 <b>Главное меню</b>",
      parse_mode: "HTML",
      reply_markup: mainMenuKeyboard
    });
    
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  // Legacy pay_card_ / pay_crypto_ kept for backwards compat but no longer shown to new users
  if (data.startsWith("pay_card_") || data.startsWith("pay_crypto_") || data.startsWith("pay_paywall_")) {
    const PAYWALL_URL = "https://paywall.ru/arrivalab";
    const isCrypto = data.startsWith("pay_crypto_");
    const isPaywall = data.startsWith("pay_paywall_");
    const prefix = isCrypto ? 11 : isPaywall ? 12 : 9;
    const programKey = data.substring(prefix);
    
    if (!KEY_TO_NAME[programKey]) {
      await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
      return;
    }
    
    const programName = KEY_TO_NAME[programKey];
    const priceNum = KEY_TO_PRICE[programKey];
    const priceStr = PROGRAMS[programKey].price;
    const now = new Date().toISOString();
    const payMethod = isCrypto ? "USDT (Crypto)" : isPaywall ? "Paywall.ru" : "Card / SBP";
    
    try {
      await savePurchase(env, telegramId, `${programName} (${payMethod})`, priceNum);
    } catch (e) {
      await sendTelegramRequest(env, "answerCallbackQuery", {
        callback_query_id: callback.id,
        text: "Произошла ошибка. Попробуйте позже.",
        show_alert: true
      });
      return;
    }
    
    await appendGoogleSheetRow(env, "Покупки", [
      telegramId,
      username || "",
      firstName,
      `${programName} (${payMethod})`,
      priceStr,
      now.replace("T", " ").substring(0, 19)
    ]);
    
    await notifyNewPurchase(env, telegramId, username, firstName, `${programName} (${payMethod})`, priceStr);
    
    let instructionsText = "";
    if (isCrypto) {
      instructionsText = `🎉 <b>Заявка успешно создана!</b>\n\nВы выбрали оплату через <b>USDT (TRC-20)</b> для программы <b>${programName}</b>.\n\n📍 Адрес кошелька TRC-20 для перевода:\n<code>TR7NHqjuwNuZt8hDPKW6Re11A6SkgCw6SS</code>\n\n<i>После перевода, пожалуйста, отправьте скриншот транзакции в нашу службу заботы: @success_vstream для активации программы.</i>`;
    } else if (isPaywall) {
      instructionsText = `✅ <b>Отлично! Заявка принята.</b>\n\nПрограмма: <b>${programName}</b>\n💰 Стоимость: <b>${priceStr}</b>\n\nПерейдите по ссылке для завершения оплаты:\n🔗 ${PAYWALL_URL}\n\n<i>После оплаты наша команда свяжется с вами в течение 24 часов.</i>`;
    } else {
      instructionsText = `🎉 <b>Заявка успешно создана!</b>\n\nВы выбрали оплату через <b>Банковскую карту / СБП</b> для программы <b>${programName}</b>.\n\nДля завершения платежа и выставления счета свяжитесь с нашей службой заботы:\n🔹 Telegram: @success_vstream`;
    }
    
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: instructionsText,
      parse_mode: "HTML"
    });
    
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "🏠 <b>Главное меню</b>",
      parse_mode: "HTML",
      reply_markup: mainMenuKeyboard
    });
    
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data === "agency_apply") {
    const registered = await userExists(env, telegramId);
    if (!registered) {
      await sendTelegramRequest(env, "answerCallbackQuery", {
        callback_query_id: callback.id,
        text: "Сначала пройдите регистрацию!",
        show_alert: true
      });
      return;
    }
    
    // Check if already submitted an application
    const existingApps = await dbQuery(env, "agency_applications", "GET", { "telegram_id": `eq.${telegramId}`, "limit": "1" });
    if (existingApps.length > 0) {
      const app = existingApps[0];
      const statusEmoji = app.status === 'approved' ? '✅' : app.status === 'rejected' ? '❌' : '🟡';
      const statusLabel = app.status === 'approved' ? 'Принята' : app.status === 'rejected' ? 'Отклонена' : 'На рассмотрении';
      await sendTelegramRequest(env, "editMessageText", {
        chat_id: telegramId,
        message_id: messageId,
        text: `📁 <b>Ваша заявка</b>\n\nСтатус: ${statusEmoji} <b>${statusLabel}</b>\n\nМы свяжемся с вами в ближайшее время.`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [[{ text: "🏠 Главное меню", callback_data: "main_menu" }]] }
      });
      await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
      return;
    }
    
    await saveUserState(env, telegramId, "Agency:waiting_for_about");
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: "📝 <b>Анкета агентства</b>\n\nРасскажите немного о себе:",
      parse_mode: "HTML"
    });
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "Например:\n • Есть ли у вас опыт стриминга?\n • Почему вы хотите работать с Oriva Lab?\n • Какие цели вы ставите перед собой?\n • Есть ли у вас уже виртуальный персонаж?\n\nОтвет вводится в свободной форме.",
      reply_markup: { remove_keyboard: true }
    });
    
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }

  if (data === "my_application") {
    const apps = await dbQuery(env, "agency_applications", "GET", { "telegram_id": `eq.${telegramId}`, "order": "id.desc", "limit": "1" });
    if (apps.length === 0) {
      await sendTelegramRequest(env, "answerCallbackQuery", {
        callback_query_id: callback.id,
        text: "Заявок не найдено.",
        show_alert: true
      });
      return;
    }
    const app = apps[0];
    const statusEmoji = app.status === 'approved' ? '✅' : app.status === 'rejected' ? '❌' : '🟡';
    const statusLabel = app.status === 'approved' ? 'Принята' : app.status === 'rejected' ? 'Отклонена' : 'На рассмотрении';
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: `📁 <b>Личный кабинет</b>\n\n<b>Заявка в агентство</b>\nСтатус: ${statusEmoji} <b>${statusLabel}</b>\n\n${app.status === 'pending' ? 'Мы рассмотрим вашу заявку. Обычно это занимает 1-3 рабочих дня.' : app.status === 'approved' ? 'Поздравляем! С вами скоро свяжется куратор команды.' : 'К сожалению, в этот раз мы не смогли принять вашу заявку.'}`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔄 Обновить", callback_data: "my_application" }],
          [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
        ]
      }
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
}

async function handleUpdate(update, env, host) {
  if (update.message) {
    await handleMessage(update.message, env, host);
  } else if (update.callback_query) {
    await handleCallbackQuery(update.callback_query, env, host);
  }
}

// ── WebApp Init Data Cryptographic Validator ────────────

async function validateTelegramInitData(initDataString, botToken) {
  try {
    const params = new URLSearchParams(initDataString);
    const hash = params.get("hash");
    if (!hash) return false;
    params.delete("hash");
    
    const keys = Array.from(params.keys()).sort();
    const dataCheckString = keys.map(k => `${k}=${params.get(k)}`).join("\n");
    
    const encoder = new TextEncoder();
    
    const webappsKey = await crypto.subtle.importKey(
      "raw",
      encoder.encode("WebApps"),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    
    const secretKeyBuffer = await crypto.subtle.sign("HMAC", webappsKey, encoder.encode(botToken));
    
    const tokenKey = await crypto.subtle.importKey(
      "raw",
      secretKeyBuffer,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    
    const validationBuffer = await crypto.subtle.sign("HMAC", tokenKey, encoder.encode(dataCheckString));
    const validationHex = Array.from(new Uint8Array(validationBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
      
    return validationHex === hash;
  } catch (e) {
    console.error("Validation error:", e);
    return false;
  }
}

// ── API Handlers ─────────────────────────────────────────

async function checkAuth(request, env) {
  const authHeader = request.headers.get("Authorization");
  
  // 1. Check Bearer token (user-entered password)
  if (authHeader && authHeader.toLowerCase().startsWith("bearer ")) {
    const password = authHeader.substring(7);
    return password === "oriva2026";
  }
  
  // 2. Check legacy URL token
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (token === "OrivaLabSecretToken") {
    return true;
  }
  
  // 3. Check Telegram WebApp initData
  if (authHeader && authHeader.toLowerCase().startsWith("twa ")) {
    const initData = authHeader.substring(4);
    const isValid = await validateTelegramInitData(initData, env.BOT_TOKEN);
    if (!isValid) return false;
    
    try {
      const params = new URLSearchParams(initData);
      const userJSON = params.get("user");
      if (userJSON) {
        const user = JSON.parse(userJSON);
        // Only allow admin user IDs
        if (String(user.id) === "405845462") {
          return true;
        }
      }
    } catch (e) {
      console.error("Error parsing initData user:", e);
    }
  }
  
  return false;
}

async function handleAdminData(request, env) {
  const isAuth = await checkAuth(request, env);
  if (!isAuth) {
    return new Response("Unauthorized", { 
      status: 401,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }
  
  try {
    const users = await dbQuery(env, "users", "GET", { order: "id.desc" });
    const purchases = await dbQuery(env, "purchases", "GET", { order: "id.desc" });
    const apps = await dbQuery(env, "agency_applications", "GET", { order: "id.desc" });
    
    return new Response(JSON.stringify({ users, purchases, apps }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Pragma": "no-cache"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

async function handleUpdatePurchase(request, env) {
  const isAuth = await checkAuth(request, env);
  if (!isAuth) {
    return new Response("Unauthorized", { 
      status: 401,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }
  
  try {
    const { id, status } = await request.json();
    const data = await dbQuery(env, "purchases", "PATCH", { id: `eq.${id}` }, { status });
    return new Response(JSON.stringify({ success: true, data }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

async function handleUpdateApplication(request, env) {
  const isAuth = await checkAuth(request, env);
  if (!isAuth) {
    return new Response("Unauthorized", { 
      status: 401,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }
  
  try {
    const { id, status } = await request.json();
    const data = await dbQuery(env, "agency_applications", "PATCH", { id: `eq.${id}` }, { status });
    return new Response(JSON.stringify({ success: true, data }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

async function handleRunMigration(request, env) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  if (secret !== "ArrivalLabMigrate2024") {
    return new Response("Forbidden", { status: 403 });
  }
  
  // Use Supabase's REST API to create a temporary function that runs DDL
  // Step 1: Create helper function via RPC-less approach
  // We'll insert a row into user_states table with a trigger-like approach,
  // but the cleanest way is to POST to /rest/v1/rpc after creating the function.
  
  // Try: Supabase allows using the pg_catalog functions via RPC
  // Actually the cleanest guaranteed approach: create a plpgsql function via POST
  // to a special Supabase endpoint that accepts function definitions.
  
  // The actual approach that works: Supabase REST API does allow creating functions
  // via the /rest/v1/ if we use the pg_catalog.pg_get_functiondef approach.
  
  // Since direct DDL is not possible through PostgREST, we use pg_net extension
  // or we rely on the fact that PATCH requests to Supabase can call stored procedures.
  
  // REAL WORKING APPROACH: Use Supabase's ability to run raw SQL via the
  // /rest/v1/ with special Content-Type that wraps the query
  
  const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  
  // Try to use Supabase pg-meta which is available at a different endpoint
  // The pg-meta API runs alongside PostgREST and accepts raw SQL
  const pgMetaUrl = `${env.SUPABASE_URL}/pg/query`;
  
  const createFuncSQL = `
    CREATE OR REPLACE FUNCTION public.run_migration_add_status()
    RETURNS TEXT AS $$
    BEGIN
      ALTER TABLE agency_applications ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending';
      RETURN 'Migration completed successfully';
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
  `;
  
  // Try creating the function via raw SQL endpoint
  const tryEndpoints = [
    `${env.SUPABASE_URL}/pg/query`,
    `${env.SUPABASE_URL}/rest/v1/rpc/query`,
  ];
  
  for (const endpoint of tryEndpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({ query: createFuncSQL })
      });
      
      if (res.ok) {
        // Now call the function
        const callRes = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/run_migration_add_status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": supabaseKey,
            "Authorization": `Bearer ${supabaseKey}`
          },
          body: "{}"
        });
        const result = await callRes.text();
        return new Response(JSON.stringify({ success: true, result, endpoint }), {
          headers: { "Content-Type": "application/json" }
        });
      }
    } catch (e) {
      // Continue to next endpoint
    }
  }
  
  // Final fallback: check if column already exists by trying to query it
  const checkUrl = `${env.SUPABASE_URL}/rest/v1/agency_applications?select=id,status&limit=1`;
  const checkRes = await fetch(checkUrl, {
    headers: {
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`
    }
  });
  
  if (checkRes.ok) {
    return new Response(JSON.stringify({
      success: true,
      message: "Column status already exists in agency_applications table",
      note: "No migration needed"
    }), { headers: { "Content-Type": "application/json" } });
  }
  
  const checkBody = await checkRes.text();
  return new Response(JSON.stringify({
    success: false,
    message: "Column does not exist and could not be created via API",
    error: checkBody,
    instruction: "Please run this SQL in Supabase Dashboard > SQL Editor: ALTER TABLE agency_applications ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending';"
  }), {
    status: 400,
    headers: { "Content-Type": "application/json" }
  });
}

async function handleSendLoginCode(request, env) {
  try {
    const { username } = await request.json();
    if (!username) {
      return new Response(JSON.stringify({ error: "Не указан логин или Email" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const cleanUsername = username.replace(/^@/, "").trim().toLowerCase();
    const isEmail = cleanUsername.includes("@");
    
    const queryParams = {
      "limit": "1"
    };
    if (isEmail) {
      queryParams["first_name"] = `ilike.*${cleanUsername}*`;
    } else {
      queryParams["username"] = `ilike.${cleanUsername}`;
    }

    const users = await dbQuery(env, "users", "GET", queryParams);

    if (users.length === 0) {
      return new Response(JSON.stringify({ error: "Пользователь с такими данными не найден в системе. Пожалуйста, сначала запустите бота @ArrivalLabBOT и пройдите регистрацию там." }), {
        status: 404,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const user = users[0];
    
    if (!user.telegram_id || user.telegram_id < 0) {
      return new Response(JSON.stringify({ error: "У этого аккаунта нет привязанного Telegram ID. Напишите в техподдержку." }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    
    const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
    const upsertRes = await fetch(`${env.SUPABASE_URL}/rest/v1/login_codes`, {
      method: "POST",
      headers: {
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates,return=representation"
      },
      body: JSON.stringify({
        telegram_id: user.telegram_id,
        code: code,
        created_at: new Date().toISOString()
      })
    });

    if (!upsertRes.ok) {
      const errTxt = await upsertRes.text();
      console.error("Failed to upsert login code:", errTxt);
      throw new Error("Не удалось сгенерировать код. Попробуйте позже.");
    }

    const botMsg = `🔑 <b>Код авторизации на сайте Oriva Lab</b>\n\nВаш проверочный код:\n<code>${code}</code>\n\nВведите его на странице входа. Время действия кода: 5 минут.`;
    const tgRes = await sendTelegramRequest(env, "sendMessage", {
      chat_id: user.telegram_id,
      text: botMsg,
      parse_mode: "HTML"
    });

    if (!tgRes.ok) {
      return new Response(JSON.stringify({ error: "Не удалось отправить сообщение в Telegram. Убедитесь, что вы запустили нашего бота @ArrivalLabBOT и не заблокировали его." }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    return new Response(JSON.stringify({ success: true, telegram_id: user.telegram_id }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });

  } catch (e) {
    console.error("handleSendLoginCode error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}

async function handleVerifyLoginCode(request, env) {
  try {
    const { telegram_id, code } = await request.json();
    if (!telegram_id || !code) {
      return new Response(JSON.stringify({ error: "Не указан Telegram ID или код" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
    const resCodes = await fetch(`${env.SUPABASE_URL}/rest/v1/login_codes?telegram_id=eq.${telegram_id}&limit=1`, {
      headers: {
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`
      }
    });

    if (!resCodes.ok) {
      throw new Error("Ошибка базы данных при проверке кода");
    }

    const codes = await resCodes.json();
    if (codes.length === 0) {
      return new Response(JSON.stringify({ error: "Код подтверждения не найден. Попробуйте запросить его заново." }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const savedCode = codes[0];
    
    const codeTime = new Date(savedCode.created_at).getTime();
    const nowTime = Date.now();
    if (nowTime - codeTime > 5 * 60 * 1000) {
      return new Response(JSON.stringify({ error: "Срок действия кода истек (5 минут). Запросите новый код." }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    if (savedCode.code.trim() !== code.trim()) {
      return new Response(JSON.stringify({ error: "Неверный код подтверждения. Пожалуйста, проверьте цифры." }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    await fetch(`${env.SUPABASE_URL}/rest/v1/login_codes?telegram_id=eq.${telegram_id}`, {
      method: "DELETE",
      headers: {
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`
      }
    }).catch(console.error);

    const users = await dbQuery(env, "users", "GET", { "telegram_id": `eq.${telegram_id}`, "limit": "1" });
    if (users.length === 0) {
      return new Response(JSON.stringify({ error: "Пользователь не найден" }), {
        status: 404,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    return new Response(JSON.stringify({ success: true, user: users[0] }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });

  } catch (e) {
    console.error("handleVerifyLoginCode error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}

async function handlePublicPurchase(request, env) {
  try {
    const { username, program_name, price, payment_method, full_name, birth_date, phone, email } = await request.json();
    if (!username || !program_name || !price || !full_name || !phone || !email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
    
    const cleanUsername = username.replace(/^@/, "").trim();
    const formattedName = `${full_name} (${phone}, ${email})`;
    
    let user_id = null;
    let telegram_id = null;
    
    const users = await dbQuery(env, "users", "GET", { "username": `eq.${cleanUsername}`, "limit": "1" });
    if (users.length > 0) {
      user_id = users[0].id;
      telegram_id = users[0].telegram_id;
      // Update existing user profile with latest contact info
      await dbQuery(env, "users", "PATCH", { id: `eq.${user_id}` }, {
        first_name: formattedName,
        birth_date: birth_date || users[0].birth_date
      });
    } else {
      telegram_id = -Math.floor(Math.random() * 1000000000) - 100000000;
      const newUser = await saveUser(env, telegram_id, cleanUsername, formattedName, birth_date || null);
      user_id = newUser.id;
    }
    
    const purchase = await dbQuery(env, "purchases", "POST", {}, {
      user_id: user_id,
      telegram_id: telegram_id,
      program_name: program_name,
      price: price,
      status: "pending"
    });
    
    const adminMsg = `🌐 <b>Новый заказ с САЙТА</b>\n\n` +
      `🔹 Программа: <b>${program_name}</b>\n` +
      `🔹 Стоимость: <b>${price} ₽</b>\n` +
      `🔹 Способ оплаты: <b>${payment_method === 'usdt' ? 'USDT (Крипта)' : 'Банковская карта'}</b>\n\n` +
      `👤 <b>Данные клиента:</b>\n` +
      `• ФИО: <b>${full_name}</b>\n` +
      `• Рождение: <b>${birth_date || 'не указано'}</b>\n` +
      `• Телефон: <b>${phone}</b>\n` +
      `• Email: <b>${email}</b>\n` +
      `• Telegram: @${cleanUsername}`;
      
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: env.ADMIN_CHAT_ID,
      text: adminMsg,
      parse_mode: "HTML"
    }).catch(() => {});
    
    return new Response(JSON.stringify({ success: true, data: purchase[0] }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}

async function handlePublicApplication(request, env) {
  try {
    const { username, full_name, birth_date, about } = await request.json();
    if (!username || !full_name || !about) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
    
    const cleanUsername = username.replace(/^@/, "").trim();
    
    let user_id = null;
    let telegram_id = null;
    
    const users = await dbQuery(env, "users", "GET", { "username": `eq.${cleanUsername}`, "limit": "1" });
    if (users.length > 0) {
      user_id = users[0].id;
      telegram_id = users[0].telegram_id;
    } else {
      telegram_id = -Math.floor(Math.random() * 1000000000) - 100000000;
      const newUser = await saveUser(env, telegram_id, cleanUsername, full_name, birth_date || null);
      user_id = newUser.id;
    }
    
    const application = await dbQuery(env, "agency_applications", "POST", {}, {
      user_id: user_id,
      telegram_id: telegram_id,
      full_name: full_name,
      birth_date: birth_date || null,
      about: about,
      status: "pending"
    });
    
    const adminMsg = `🌐 <b>Новая заявка в агентство с САЙТА</b>\n\n🔹 ФИО: <b>${full_name}</b>\n🔹 Рождение: <b>${birth_date || 'не указано'}</b>\n👤 Клиент: @${cleanUsername}\n📝 О себе: <i>${about}</i>`;
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: env.ADMIN_CHAT_ID,
      text: adminMsg,
      parse_mode: "HTML"
    }).catch(() => {});
    
    return new Response(JSON.stringify({ success: true, data: application[0] }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}

async function handlePaywallWebhook(request, env) {
  try {
    const rawText = await request.text();
    console.log("Raw Paywall payload:", rawText);
    
    let payload = {};
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("form-urlencoded") || rawText.includes("clickid=")) {
      const params = new URLSearchParams(rawText);
      payload = Object.fromEntries(params.entries());
    } else {
      try {
        payload = JSON.parse(rawText);
      } catch (e) {
        const params = new URLSearchParams(rawText);
        payload = Object.fromEntries(params.entries());
      }
    }
    console.log("Parsed Paywall payload:", JSON.stringify(payload));

    const status = payload.status || payload.event || "";
    const isPaid = status === "paid" || status === "success" || status === "payment.success" || status === "subscription.created" || status === "Firstbill" || status.toLowerCase().includes("bill");
    
    if (!isPaid) {
      return new Response(JSON.stringify({ message: "Ignored non-success event", status }), {
        status: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    // Try to extract user identifiers
    const email = (payload.email || (payload.user && payload.user.email) || "").trim().toLowerCase();
    const phone = (payload.phone || (payload.user && payload.user.phone) || "").trim();
    const telegramUsername = (payload.telegram_username || payload.username || (payload.user && payload.user.username) || "").replace(/^@/, "").trim().toLowerCase();
    const telegramId = payload.telegram_id || payload.tg_id || (payload.user && payload.user.telegram_id) || null;

    // Search for a matching purchase in the database
    let matchedPurchase = null;

    if (telegramId) {
      const purchases = await dbQuery(env, "purchases", "GET", { "telegram_id": `eq.${telegramId}`, "status": "eq.pending" });
      if (purchases.length > 0) matchedPurchase = purchases[0];
    }

    if (!matchedPurchase && telegramUsername) {
      // Find user by username
      const users = await dbQuery(env, "users", "GET", { "username": `eq.${telegramUsername}` });
      if (users.length > 0) {
        const userIds = users.map(u => u.id);
        // Find pending purchases for these users
        for (const uId of userIds) {
          const purchases = await dbQuery(env, "purchases", "GET", { "user_id": `eq.${uId}`, "status": "eq.pending" });
          if (purchases.length > 0) {
            matchedPurchase = purchases[0];
            break;
          }
        }
      }
    }

    if (!matchedPurchase && (email || phone)) {
      // Search users where name/first_name contains email or phone
      const allUsers = await dbQuery(env, "users", "GET", {});
      const matchingUsers = allUsers.filter(u => {
        const name = (u.first_name || "").toLowerCase();
        return (email && name.includes(email)) || (phone && name.includes(phone));
      });

      if (matchingUsers.length > 0) {
        for (const u of matchingUsers) {
          const purchases = await dbQuery(env, "purchases", "GET", { "user_id": `eq.${u.id}`, "status": "eq.pending" });
          if (purchases.length > 0) {
            matchedPurchase = purchases[0];
            break;
          }
        }
      }
    }

    let purchaseId = null;
    let programName = "LAUNCH";
    let finalTgId = telegramId;

    if (matchedPurchase) {
      purchaseId = matchedPurchase.id;
      programName = matchedPurchase.program_name;
      finalTgId = matchedPurchase.telegram_id;
      // Update status in Supabase to approved
      await dbQuery(env, "purchases", "PATCH", { id: `eq.${purchaseId}` }, { status: "approved" });
    } else {
      // Create a fallback purchase if no pending match was found
      let userId = null;
      if (telegramUsername) {
        const users = await dbQuery(env, "users", "GET", { "username": `eq.${telegramUsername}`, "limit": "1" });
        if (users.length > 0) {
          userId = users[0].id;
          if (!finalTgId) finalTgId = users[0].telegram_id;
        }
      }
      
      if (!finalTgId) {
        finalTgId = -Math.floor(Math.random() * 1000000000) - 100000000;
      }

      if (!userId) {
        const name = `Paywall Client (${phone || 'no phone'}, ${email || 'no email'})`;
        const newUser = await saveUser(env, finalTgId, telegramUsername || `paywall_${Date.now()}`, name, null);
        userId = newUser.id;
      }

      const newPurchase = await dbQuery(env, "purchases", "POST", {}, {
        user_id: userId,
        telegram_id: finalTgId,
        program_name: "LAUNCH (Paywall)",
        price: payload.amount || 49900,
        status: "approved"
      });
      if (newPurchase.length > 0) purchaseId = newPurchase[0].id;
    }

    // Log to site_events table
    await dbQuery(env, "site_events", "POST", {}, {
      session_id: payload.session_id || `paywall_sess_${Date.now()}`,
      event_type: "purchase_success",
      details: {
        paywall: true,
        program_name: programName,
        email: email,
        phone: phone,
        purchase_id: purchaseId
      }
    }).catch(() => {});

    // Notify admin
    const adminMsg = `💳 <b>Оплата через Paywall получена!</b>\n\n` +
      `🔹 Программа: <b>${programName}</b>\n` +
      `🔹 Статус: <b>Оплачено (Approved)</b>\n` +
      `🔹 Email: <b>${email || 'не указан'}</b>\n` +
      `🔹 Телефон: <b>${phone || 'не указан'}</b>\n` +
      `🔹 Telegram: @${telegramUsername || 'не указан'} (ID: <code>${finalTgId}</code>)`;

    await sendTelegramRequest(env, "sendMessage", {
      chat_id: env.ADMIN_CHAT_ID,
      text: adminMsg,
      parse_mode: "HTML"
    }).catch(() => {});

    // Notify user in Telegram if valid ID
    if (finalTgId && finalTgId > 0) {
      const userMsg = `🎉 <b>Спасибо за оплату!</b>\n\nМы получили ваш платёж через Paywall за программу <b>${programName}</b>.\n\nВ ближайшее время специалист Oriva Lab свяжется с вами в Telegram и предоставит дальнейшие инструкции.`;
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: finalTgId,
        text: userMsg,
        parse_mode: "HTML"
      }).catch(() => {});
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  } catch (err) {
    console.error("Paywall Webhook Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}

// ── Cloudflare Worker Fetch Handler ──────────────────────

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const host = url.origin;
    
    // Serve HTML page
    if (url.pathname === "/admin-panel") {
      return new Response(ADMIN_PANEL_HTML(env), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }
    
    // API endpoints
    if (url.pathname === "/api/admin/data") {
      return await handleAdminData(request, env);
    }
    
    if (url.pathname === "/api/admin/update-purchase") {
      return await handleUpdatePurchase(request, env);
    }
    
    if (url.pathname === "/api/admin/update-application") {
      return await handleUpdateApplication(request, env);
    }
    
    if (url.pathname === "/api/admin/run-migration") {
      return await handleRunMigration(request, env);
    }
    
    if (url.pathname === "/api/public/purchase") {
      return await handlePublicPurchase(request, env);
    }
    
    if (url.pathname === "/api/public/application") {
      return await handlePublicApplication(request, env);
    }

    if (url.pathname === "/api/public/paywall-webhook") {
      return await handlePaywallWebhook(request, env);
    }

    if (url.pathname === "/api/public/send-login-code") {
      return await handleSendLoginCode(request, env);
    }
    
    if (url.pathname === "/api/public/verify-login-code") {
      return await handleVerifyLoginCode(request, env);
    }
    
    // CORS options
    if (request.method === "OPTIONS") {
      return new Response("OK", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }
    
    // Webhook POST update
    if (request.method === "POST") {
      try {
        const payload = await request.json();
        await handleUpdate(payload, env, host);
      } catch (e) {
        console.error("Worker handler error:", e.stack || e.message);
      }
      return new Response("OK", { status: 200 });
    }
    
    return new Response("OK", { status: 200 });
  }
};

const ADMIN_PANEL_HTML = (env) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Arrival Lab Admin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <style>
    :root {
      --bg-color: #F8F9FD;
      --card-bg: #FFFFFF;
      --primary: #5F00F5;
      --primary-light: #EBE3FF;
      --text-main: #0D1527;
      --text-muted: #5F6B82;
      --border-color: rgba(95, 0, 245, 0.06);
      --shadow: 0px 4px 16px rgba(14, 23, 44, 0.04);
      --success: #00B159;
      --success-light: #E6F8EE;
      --warning: #FF9F00;
      --warning-light: #FFF5E6;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      -webkit-tap-highlight-color: transparent;
    }
    
    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      padding-bottom: 90px;
    }
    
    /* Top Header Bar */
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background: var(--card-bg);
      border-bottom: 1px solid var(--border-color);
    }
    
    .profile-section {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
    }
    
    .upgrade-btn {
      background: var(--primary);
      color: white;
      border: none;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    
    /* Container */
    .container {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    /* Purple Hero Card */
    .hero-card {
      background: var(--primary);
      color: white;
      border-radius: 16px;
      padding: 20px;
      position: relative;
      overflow: hidden;
      box-shadow: 0px 8px 24px rgba(95, 0, 245, 0.2);
    }
    
    .hero-title {
      font-size: 14px;
      opacity: 0.9;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .hero-value {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    
    .hero-sub {
      font-size: 12px;
      opacity: 0.8;
    }
    
    .hero-btn {
      position: absolute;
      right: 20px;
      top: 20px;
      background: white;
      color: var(--primary);
      border: none;
      padding: 8px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    
    /* 2x2 Grid Blocks */
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    
    .stat-box {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 14px;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .stat-box-title {
      font-size: 13px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .stat-box-val {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-main);
    }
    
    /* Progress Card */
    .progress-card {
      background: #EDF3FC;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    
    .progress-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .progress-circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid var(--primary);
      border-top-color: transparent;
      animation: spin 1s linear infinite;
    }
    
    .progress-info-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--primary);
    }
    
    .progress-info-sub {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 2px;
    }
    
    /* List Card */
    .list-card {
      background: var(--card-bg);
      border-radius: 16px;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow);
      padding: 16px;
    }
    
    .list-card-header {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    }
    
    .list-item:last-child {
      border-bottom: none;
    }
    
    .item-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .item-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .item-details {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    .item-title {
      font-size: 14px;
      font-weight: 600;
    }
    
    .item-sub {
      font-size: 11px;
      color: var(--text-muted);
    }
    
    .item-right {
      text-align: right;
    }
    
    .item-value {
      font-size: 13px;
      font-weight: 600;
    }
    
    .item-badge {
      font-size: 11px;
      padding: 4px 8px;
      border-radius: 10px;
      font-weight: 500;
    }
    
    .badge-pending {
      background: var(--warning-light);
      color: var(--warning);
    }
    
    .badge-paid {
      background: var(--success-light);
      color: var(--success);
    }

    .badge-rejected {
      background: #FFEBEB;
      color: #FF4D4D;
    }
    
    /* Tab View Management */
    .tab-content {
      display: none;
    }
    
    .tab-content.active {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    /* Bottom Navigation */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 68px;
      background: var(--card-bg);
      border-top: 1px solid var(--border-color);
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0px -4px 16px rgba(14, 23, 44, 0.04);
      z-index: 100;
    }
    
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      color: var(--text-muted);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      width: 25%;
      padding: 8px 0;
    }
    
    .nav-item.active {
      color: var(--primary);
    }
    
    .nav-item svg {
      width: 22px;
      height: 22px;
      fill: currentColor;
    }
    
    /* Search Input */
    .search-box {
      background: var(--card-bg);
      border-radius: 12px;
      border: 1px solid var(--border-color);
      padding: 10px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: var(--shadow);
    }
    
    .search-box input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 14px;
      background: transparent;
    }
    
    /* Action Buttons */
    .btn-action {
      background: var(--primary);
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      margin-left: 6px;
    }
    
    .btn-action.btn-secondary {
      background: #EBE3FF;
      color: var(--primary);
    }
    
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>

  <!-- Login Screen -->
  <div id="login-screen" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at top right, #1e1b4b, #0f172a); z-index: 10000; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box; font-family: 'Inter', sans-serif;">
    <div style="background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 40px 32px; width: 100%; max-width: 400px; box-sizing: border-box; box-shadow: 0 20px 40px rgba(0,0,0,0.4); text-align: center; color: white;">
      <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #7c3aed, #5F00F5); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; color: white; margin: 0 auto 20px auto; box-shadow: 0 8px 16px rgba(95,0,245,0.3);">OL</div>
      <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.5px;">Панель управления</h2>
      <p style="color: #94a3b8; font-size: 14px; margin-bottom: 32px;">Для продолжения введите пароль администратора</p>
      
      <div style="display: flex; flex-direction: column; gap: 16px; text-align: left;">
        <div>
          <label for="login-password" style="font-size: 12px; font-weight: 600; color: #a1a1aa; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">Пароль доступа</label>
          <input type="password" id="login-password" placeholder="••••••••" style="width: 100%; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 14px 16px; box-sizing: border-box; color: white; font-size: 15px; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.2)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.boxShadow='none'" onkeypress="if(event.key === 'Enter') submitLogin()">
        </div>
        <div id="login-error" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); color: #f87171; font-size: 13px; padding: 12px; border-radius: 12px; display: none; align-items: center; gap: 8px;">
          <span>⚠️</span> Неверный пароль администратора.
        </div>
        <button onclick="submitLogin()" style="width: 100%; background: linear-gradient(135deg, #7c3aed, #5F00F5); color: white; border: none; border-radius: 12px; padding: 14px; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 8px; box-shadow: 0 4px 12px rgba(95,0,245,0.2); transition: transform 0.1s, opacity 0.2s;" onmouseover="this.style.opacity='0.95'" onmouseout="this.style.opacity='1'" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform='scale(1)'">Подтвердить вход</button>
      </div>
    </div>
  </div>

  <!-- Top Header -->
  <div class="header-bar">
    <div class="profile-section">
      <div class="avatar">AL</div>
      <span style="font-weight: 700; font-size: 15px;">Arrival Lab</span>
    </div>
    <button class="upgrade-btn">Admin</button>
  </div>

  <div class="container">
    <!-- ================= OVERVIEW TAB ================= -->
    <div id="tab-overview" class="tab-content active">
      <!-- Hero Card -->
      <div class="hero-card">
        <div class="hero-title">Активные пользователи <span style="font-size: 11px;">ℹ️</span></div>
        <div class="hero-value" id="stats-total-users">0</div>
        <div class="hero-sub" id="stats-users-sub">▲ +0 за неделю</div>
        <button class="hero-btn" onclick="loadData()">Обновить</button>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-box-title">💳 Заказы</div>
          <div class="stat-box-val" id="stats-total-orders">0</div>
        </div>
        <div class="stat-box">
          <div class="stat-box-title">📝 Заявки</div>
          <div class="stat-box-val" id="stats-total-apps">0</div>
        </div>
        <div class="stat-box">
          <div class="stat-box-title">📊 Конверсия</div>
          <div class="stat-box-val" id="stats-conversion">0%</div>
        </div>
        <div class="stat-box">
          <div class="stat-box-title">💰 Обороты</div>
          <div class="stat-box-val" id="stats-revenue">₽0</div>
        </div>
      </div>

      <!-- Progress/Status Card -->
      <div class="progress-card">
        <div class="progress-left">
          <div class="progress-circle"></div>
          <div>
            <div class="progress-info-title">Интеграция систем</div>
            <div class="progress-info-sub" id="sheets-status">Sheets & Supabase активны</div>
          </div>
        </div>
        <span style="color: var(--primary); font-weight: 600;">➔</span>
      </div>

      <!-- Brain / Recent Activity List Card -->
      <div class="list-card">
        <div class="list-card-header">
          <span>Последняя активность</span>
          <span style="color: var(--primary); font-size: 12px; cursor: pointer;" onclick="switchTab('apps')">Все заявки</span>
        </div>
        <div id="recent-activity-list">
          <div style="text-align: center; padding: 20px; color: var(--text-muted);">Загрузка...</div>
        </div>
      </div>
    </div>

    <!-- ================= USERS TAB ================= -->
    <div id="tab-users" class="tab-content">
      <div class="search-box">
        <span>🔍</span>
        <input type="text" id="users-search" placeholder="Поиск по имени или ID..." oninput="filterUsers()">
      </div>
      <div class="list-card">
        <div class="list-card-header">Зарегистрированные пользователи</div>
        <div id="users-list">
          <div style="text-align: center; padding: 20px; color: var(--text-muted);">Пользователей нет.</div>
        </div>
      </div>
    </div>

    <!-- ================= ORDERS TAB ================= -->
    <div id="tab-orders" class="tab-content">
      <div class="list-card">
        <div class="list-card-header">Заявки на программы</div>
        <div id="orders-list">
          <div style="text-align: center; padding: 20px; color: var(--text-muted);">Заказов нет.</div>
        </div>
      </div>
    </div>

    <!-- ================= APPLICATIONS TAB ================= -->
    <div id="tab-apps" class="tab-content">
      <div class="list-card">
        <div class="list-card-header">Заявки в агентство</div>
        <div id="apps-list">
          <div style="text-align: center; padding: 20px; color: var(--text-muted);">Заявок нет.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Navigation -->
  <div class="bottom-nav">
    <div class="nav-item active" id="nav-overview" onclick="switchTab('overview')">
      <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      <span>Обзор</span>
    </div>
    <div class="nav-item" id="nav-users" onclick="switchTab('users')">
      <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      <span>Пользователи</span>
    </div>
    <div class="nav-item" id="nav-orders" onclick="switchTab('orders')">
      <svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
      <span>Заказы</span>
    </div>
    <div class="nav-item" id="nav-apps" onclick="switchTab('apps')">
      <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      <span>Заявки</span>
    </div>
  </div>

  <script>
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    let store = {
      users: [],
      purchases: [],
      apps: []
    };

    function getAuthHeader() {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      if (token) return 'token ' + token;
      
      const savedPassword = localStorage.getItem('oriva_admin_password');
      if (savedPassword) return 'bearer ' + savedPassword;
      
      return 'twa ' + tg.initData;
    }

    function showLoginScreen() {
      document.getElementById('login-screen').style.display = 'flex';
      document.getElementById('login-error').style.display = 'none';
      document.getElementById('login-password').value = '';
    }

    function hideLoginScreen() {
      document.getElementById('login-screen').style.display = 'none';
    }

    async function submitLogin() {
      const pwd = document.getElementById('login-password').value;
      if (!pwd) return;
      
      localStorage.setItem('oriva_admin_password', pwd);
      
      try {
        const header = 'bearer ' + pwd;
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const urlSuffix = token ? '?token=' + token : '';
        
        const res = await fetch('/api/admin/data' + urlSuffix, {
          headers: { 'Authorization': header }
        });
        
        if (res.status === 401 || res.status === 403) {
          document.getElementById('login-error').style.display = 'flex';
          localStorage.removeItem('oriva_admin_password');
          return;
        }
        
        hideLoginScreen();
        loadData();
      } catch (err) {
        console.error(err);
      }
    }

    async function loadData() {
      try {
        const header = getAuthHeader();
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const cacheBuster = '_t=' + Date.now();
        const separator = token ? '&' : '?';
        const urlSuffix = (token ? '?token=' + token : '?') + (token ? '&' : '') + cacheBuster;
        
        const res = await fetch('/api/admin/data' + urlSuffix, {
          headers: { 'Authorization': header, 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        });
        if (res.status === 401 || res.status === 403) {
          showLoginScreen();
          return;
        }
        if (!res.ok) throw new Error('Failed to load data');
        const data = await res.json();
        
        store = data;
        
        // Render Stats
        document.getElementById('stats-total-users').innerText = data.users.length;
        document.getElementById('stats-users-sub').innerText = '▲ +' + data.users.filter(u => {
          const regDate = new Date(u.registered_at);
          const diffTime = Math.abs(new Date() - regDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 7;
        }).length + ' за неделю';
        
        document.getElementById('stats-total-orders').innerText = data.purchases.length;
        document.getElementById('stats-total-apps').innerText = data.apps.length;
        
        const paidCount = data.purchases.filter(p => p.status === 'paid').length;
        const totalPurchases = data.purchases.length;
        const conversion = totalPurchases > 0 ? Math.round((paidCount / totalPurchases) * 100) : 0;
        document.getElementById('stats-conversion').innerText = conversion + '%';
        
        const revenue = data.purchases
          .filter(p => p.status === 'paid')
          .reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0);
        document.getElementById('stats-revenue').innerText = '₽' + revenue.toLocaleString();
        
        renderOverviewList();
        renderUsersList(data.users);
        renderOrdersList(data.purchases);
        renderAppsList(data.apps);
      } catch (err) {
        console.error(err);
      }
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      
      document.getElementById('tab-' + tabId).classList.add('active');
      document.getElementById('nav-' + tabId).classList.add('active');
    }

    function renderOverviewList() {
      const container = document.getElementById('recent-activity-list');
      container.innerHTML = '';
      
      const allActivity = [];
      store.users.slice(0, 3).forEach(u => {
        allActivity.push({
          type: 'user',
          title: u.first_name,
          sub: 'Регистрация • ' + u.birth_date,
          date: new Date(u.registered_at),
          badge: 'Регистрация',
          badgeClass: 'badge-paid'
        });
      });
      
      store.purchases.slice(0, 3).forEach(p => {
        allActivity.push({
          type: 'purchase',
          title: p.program_name,
          sub: 'Заказ от пользователя ID ' + p.telegram_id,
          date: new Date(p.paid_at),
          badge: p.status === 'paid' ? 'Оплачено' : 'Ожидает',
          badgeClass: p.status === 'paid' ? 'badge-paid' : 'badge-pending'
        });
      });

      allActivity.sort((a, b) => b.date - a.date);
      
      if (allActivity.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--text-muted);">Активности нет.</div>';
        return;
      }

      allActivity.slice(0, 5).forEach(item => {
        container.innerHTML += \`
          <div class="list-item">
            <div class="item-left">
              <div class="item-icon">\${item.type === 'user' ? '👤' : '💳'}</div>
              <div class="item-details">
                <div class="item-title">\${item.title}</div>
                <div class="item-sub">\${item.sub}</div>
              </div>
            </div>
            <div class="item-right">
              <span class="item-badge \${item.badgeClass}">\${item.badge}</span>
            </div>
          </div>
        \`;
      });
    }

    function renderUsersList(users) {
      const container = document.getElementById('users-list');
      container.innerHTML = '';
      if (users.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--text-muted);">Пользователей нет.</div>';
        return;
      }
      users.forEach(u => {
        container.innerHTML += \`
          <div class="list-item">
            <div class="item-left">
              <div class="item-icon">👤</div>
              <div class="item-details">
                <div class="item-title">\${u.first_name} (\${u.username ? '@' + u.username : 'нет'})</div>
                <div class="item-sub">ID: \${u.telegram_id} • Рождение: \${u.birth_date}</div>
              </div>
            </div>
          </div>
        \`;
      });
    }

    function filterUsers() {
      const q = document.getElementById('users-search').value.toLowerCase();
      const filtered = store.users.filter(u => 
        u.first_name.toLowerCase().includes(q) || 
        (u.username && u.username.toLowerCase().includes(q)) || 
        String(u.telegram_id).includes(q)
      );
      renderUsersList(filtered);
    }

    function renderOrdersList(purchases) {
      const container = document.getElementById('orders-list');
      container.innerHTML = '';
      if (purchases.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--text-muted);">Заказов нет.</div>';
        return;
      }
      purchases.forEach(p => {
        let actionButtons = '';
        if (p.status === 'pending') {
          actionButtons = \`
            <div style="margin-top: 8px;">
              <button class="btn-action" onclick="updateOrderStatus(\${p.id}, 'paid')">Оплачен</button>
              <button class="btn-action btn-secondary" onclick="updateOrderStatus(\${p.id}, 'rejected')">Отмена</button>
            </div>
          \`;
        }
        
        container.innerHTML += \`
          <div class="list-item" style="flex-direction: column; align-items: flex-start; gap: 8px; padding: 16px 0;">
            <div style="display: flex; justify-content: space-between; width: 100%;">
              <div class="item-left">
                <div class="item-icon">💳</div>
                <div class="item-details">
                  <div class="item-title">\${p.program_name} — ₽\${parseFloat(p.price).toLocaleString()}</div>
                  <div class="item-sub">Telegram ID: \${p.telegram_id} • \${new Date(p.paid_at).toLocaleString()}</div>
                </div>
              </div>
              <div class="item-right">
                <span class="item-badge \${p.status === 'paid' ? 'badge-paid' : 'badge-pending'}">\${p.status}</span>
              </div>
            </div>
            \${actionButtons}
          </div>
        \`;
      });
    }

    async function updateOrderStatus(orderId, status) {
      try {
        const header = getAuthHeader();
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const urlSuffix = token ? '?token=' + token : '';
        
        const res = await fetch('/api/admin/update-purchase' + urlSuffix, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': header
          },
          body: JSON.stringify({ id: orderId, status })
        });
        if (!res.ok) throw new Error('Update failed');
        loadData();
      } catch (err) {
        console.error(err);
      }
    }

    function renderAppsList(apps) {
      const container = document.getElementById('apps-list');
      container.innerHTML = '';
      if (apps.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--text-muted);">Заявок нет.</div>';
        return;
      }
      apps.forEach(a => {
        let badgeClass = 'badge-pending';
        let statusLabel = 'Ожидает';
        if (a.status === 'approved') {
          badgeClass = 'badge-paid';
          statusLabel = 'Принято';
        } else if (a.status === 'rejected') {
          badgeClass = 'badge-rejected';
          statusLabel = 'Отклонено';
        }
        
        let actionButtons = '';
        if (a.status === 'pending' || !a.status) {
          actionButtons = \`
            <div style="margin-top: 8px;">
              <button class="btn-action" onclick="updateAppStatus(\${a.id}, 'approved')">Принять</button>
              <button class="btn-action btn-secondary" onclick="updateAppStatus(\${a.id}, 'rejected')">Отклонить</button>
            </div>
          \`;
        }
        
        container.innerHTML += \`
          <div class="list-item" style="flex-direction: column; align-items: flex-start; gap: 8px; padding: 16px 0;">
            <div style="display: flex; justify-content: space-between; width: 100%;">
              <div class="item-left">
                <div class="item-icon">📝</div>
                <div class="item-details">
                  <div class="item-title">\${a.full_name}</div>
                  <div class="item-sub">Рождение: \${a.birth_date} • ID: \${a.telegram_id}</div>
                </div>
              </div>
              <div class="item-right">
                <span class="item-badge \${badgeClass}">\${statusLabel}</span>
              </div>
            </div>
            <div style="font-size: 13px; color: var(--text-muted); background: #F0F2F6; padding: 10px; border-radius: 8px; width: 100%; margin-top: 6px; line-height: 1.4; box-sizing: border-box;">
              <b>О себе:</b> \${a.about}
            </div>
            \${actionButtons}
          </div>
        \`;
      });
    }

    async function updateAppStatus(appId, status) {
      try {
        const header = getAuthHeader();
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const urlSuffix = token ? '?token=' + token : '';
        
        const res = await fetch('/api/admin/update-application' + urlSuffix, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': header
          },
          body: JSON.stringify({ id: appId, status })
        });
        if (!res.ok) throw new Error('Update failed');
        loadData();
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  </script>
</body>
</html>
`;

