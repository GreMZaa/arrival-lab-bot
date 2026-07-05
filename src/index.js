const WELCOME_TEXT = `👋 <b>Добро пожаловать в Arrival Lab!</b>\n\nЯ — Ariva, цифровой консультант лаборатории цифровых моделей.\n\nЯ помогу подобрать программу именно под вашу цель.\nЭто займет меньше минуты.`;

const startKeyboard = {
  keyboard: [
    [{ text: "🚀 Начать" }]
  ],
  resize_keyboard: true,
  one_time_keyboard: false
};

const mainMenuKeyboard = {
  keyboard: [
    [{ text: "🚀 Хочу всё настроить без технических сложностей" }],
    [{ text: "🔞 Хочу работать на специализированных платформах (18+)" }],
    [{ text: "⚙️ Хочу, чтобы вы всё настроили за меня" }],
    [{ text: "🎥 Уже стримлю и хочу перейти в виртуальный формат" }],
    [{ text: "🤝 Хочу работать с вашим агентством" }]
  ],
  resize_keyboard: true
};

const PROGRAMS = {
  start: {
    title: "🚀 START\nСамостоятельный запуск",
    price: "14 900 ₽",
    items: [
      "Лицензия на готового виртуального персонажа (в рамках условий программы)",
      "Полная инструкция по запуску",
      "Настройка VTuber",
      "Настройка необходимых программ",
      "Регистрация на стриминговых площадках",
      "Настройка получения выплат",
      "Инструкция по безопасности",
      "База знаний",
      "Чек-лист подготовки к первому эфиру",
    ],
    result: "За несколько дней пользователь сможет самостоятельно выйти на свой первый стрим.",
  },
  platform_pro: {
    title: "🔞 PLATFORM PRO\nРабота на специализированных платформах (18+)",
    price: "от 59 900 ₽",
    items: [
      "Всё необходимое для запуска виртуального стриминга",
      "Подбор специализированных платформ под цели клиента",
      "Разбор правил и требований каждой платформы",
      "Настройка аккаунтов",
      "Помощь с прохождением верификации (если это предусмотрено правилами платформы)",
      "Настройка получения выплат",
      "Настройка приватности и анонимности",
      "Стратегия первых трансляций",
      "Рекомендации по развитию",
      "Поддержка первых эфиров",
    ],
    result: "Полностью готовая система для работы на выбранных специализированных платформах с пониманием их правил и особенностей.",
  },
  launch: {
    title: "⚙️ LAUNCH\nЗапуск под ключ",
    price: "49 900 ₽",
    items: [
      "Всё из START",
      "Полная удалённая настройка компьютера",
      "Настройка всех программ",
      "Настройка VTuber",
      "Проверка камеры",
      "Проверка микрофона",
      "Проверка оборудования",
      "Регистрация аккаунтов",
      "Помощь с прохождением верификации",
      "Настройка получения выплат",
      "Оформление профиля",
      "Настройка меню",
      "Настройка автоматизации",
      "Первый тестовый эфир вместе с командой",
      "Поддержка 7 дней",
    ],
    result: "Полностью готовая система.\nПользователю остается только выйти в эфир.",
  },
  restart: {
    title: "🔄 RESTART\nПереход на виртуальный формат",
    price: "39 900 ₽",
    items: [
      "Лицензия на виртуального персонажа",
      "Анализ текущего канала",
      "Анализ оборудования",
      "Интеграция VTuber",
      "Перенос существующих настроек",
      "Обновление оформления",
      "Стратегия перехода",
      "План удержания аудитории",
      "Поддержка до успешного запуска",
    ],
    result: "Переход на виртуальный формат без необходимости начинать карьеру заново.",
  },
  agency: {
    title: "🤝 ARIVA TALENTS\nАгентская программа",
    price: "15% от дохода",
    extra: "Работа осуществляется только после рассмотрения заявки.",
    items: [
      "Всё из программы LAUNCH",
      "Персональная стратегия развития",
      "Регулярные консультации",
      "Анализ статистики",
      "Рекомендации по развитию контента",
      "Помощь с развитием личного бренда",
      "Обновление виртуального персонажа",
      "Техническая поддержка",
      "Помощь в запуске новых проектов",
    ],
    result: "Пользователь становится частью агентства Arrival Lab и получает долгосрочное сопровождение команды.",
  },
};

const BUTTON_TO_KEY = {
  "🚀 Хочу всё настроить без технических сложностей": "start",
  "🔞 Хочу работать на специализированных платформах (18+)": "platform_pro",
  "⚙️ Хочу, чтобы вы всё настроили за меня": "launch",
  "🎥 Уже стримлю и хочу перейти в виртуальный формат": "restart",
  "🤝 Хочу работать с вашим агентством": "agency",
};

const KEY_TO_NAME = {
  start: "START",
  platform_pro: "PLATFORM PRO",
  launch: "LAUNCH",
  restart: "RESTART"
};

const KEY_TO_PRICE = {
  start: 14990,
  platform_pro: 59900,
  launch: 49900,
  restart: 39900
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
  return {
    inline_keyboard: [
      [{ text: "💳 Купить программу", callback_data: `buy_${programKey}` }],
      [{ text: "🏠 Главное меню", callback_data: "main_menu" }]
    ]
  };
}

function confirmPurchase(programKey) {
  return {
    inline_keyboard: [
      [{ text: "💳 Перейти к оплате", callback_data: `pay_${programKey}` }],
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

const ADMIN_WELCOME = `⚡️ <b>Панель администратора Arrival Lab</b>\n\nДобро пожаловать в панель управления. Выберите нужное действие на клавиатуре ниже:`;

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
    headers: headers
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
  
  if (text === "/admin") {
    const isAuthorized = String(message.chat.id) === String(env.ADMIN_CHAT_ID) || String(telegramId) === "405845462";
    if (!isAuthorized) {
      return;
    }
    const adminKeyboard = {
      inline_keyboard: [
        [
          { text: "🖥 Открыть веб-админку", web_app: { url: `${workerHost}/admin-panel` } }
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
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: message.chat.id,
      text: ADMIN_WELCOME,
      parse_mode: "HTML",
      reply_markup: adminKeyboard
    });
    return;
  }
  
  if (text === "/start") {
    const registered = await userExists(env, telegramId);
    if (registered) {
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: telegramId,
        text: "🏠 <b>Главное меню</b>\n\nВыберите вариант, который лучше всего подходит именно вам.",
        parse_mode: "HTML",
        reply_markup: mainMenuKeyboard
      });
    } else {
      await sendTelegramRequest(env, "sendMessage", {
        chat_id: telegramId,
        text: WELCOME_TEXT,
        parse_mode: "HTML",
        reply_markup: startKeyboard
      });
    }
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
    await saveUserState(env, telegramId, "Registration:waiting_for_name");
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
      text: `⚠️ <b>Для продолжения работы вам необходимо пройти регистрацию!</b>\n\n${WELCOME_TEXT}`,
      parse_mode: "HTML",
      reply_markup: startKeyboard
    });
    return;
  }
  
  if (state === "Registration:waiting_for_name") {
    if (!text) {
      await sendTelegramRequest(env, "sendMessage", { chat_id: telegramId, text: "Пожалуйста, введите ваше имя." });
      return;
    }
    await saveUserState(env, telegramId, "Registration:waiting_for_birth_date", { first_name: text });
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
    
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "<b>Отлично!</b>\n\nТеперь выберите вариант, который лучше всего подходит именно вам.",
      parse_mode: "HTML",
      reply_markup: mainMenuKeyboard
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
      text: "Расскажите немного о себе.\n\nНапример:\n • Есть ли у вас опыт стриминга?\n • Почему вы хотите работать с Arrival Lab?\n • Какие цели вы ставите перед собой?\n • Есть ли у вас уже виртуальный персонаж?\n\nОтвет вводится в свободной форме."
    });
    return;
  }
  
  if (state === "Agency:waiting_for_about") {
    if (!text) {
      await sendTelegramRequest(env, "sendMessage", { chat_id: telegramId, text: "Пожалуйста, расскажите о себе." });
      return;
    }
    
    const fullNameVal = stateData.full_name;
    const birthDateVal = stateData.birth_date;
    const now = new Date().toISOString();
    
    await saveApplication(env, telegramId, fullNameVal, birthDateVal, text);
    await deleteUserState(env, telegramId);
    
    await appendGoogleSheetRow(env, "Заявки", [
      telegramId,
      username || "",
      fullNameVal,
      birthDateVal,
      text,
      now.replace("T", " ").substring(0, 19)
    ]);
    
    await notifyNewApplication(env, telegramId, username, fullNameVal);
    
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "✅ <b>Спасибо!</b>\n\nВаша заявка успешно отправлена.\nМы внимательно рассмотрим её и свяжемся с вами в ближайшее время.",
      parse_mode: "HTML",
      reply_markup: mainMenuKeyboard
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
    const adminKeyboard = {
      inline_keyboard: [
        [
          { text: "🖥 Открыть веб-админку", web_app: { url: `${host}/admin-panel` } }
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
    
    const text = `📊 <b>Статистика Arrival Lab</b>\n\n` +
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
      text: `Вы выбрали программу:\n\n<b>${name}</b>\n💰 ${price}\n\nДля продолжения нажмите кнопку ниже.`,
      parse_mode: "HTML",
      reply_markup: confirmPurchase(programKey)
    });
    await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
    return;
  }
  
  if (data.startsWith("pay_")) {
    const programKey = data.substring(4);
    if (!KEY_TO_NAME[programKey]) {
      await sendTelegramRequest(env, "answerCallbackQuery", { callback_query_id: callback.id });
      return;
    }
    
    const programName = KEY_TO_NAME[programKey];
    const priceNum = KEY_TO_PRICE[programKey];
    const priceStr = PROGRAMS[programKey].price;
    const now = new Date().toISOString();
    
    try {
      await savePurchase(env, telegramId, programName, priceNum);
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
      programName,
      priceStr,
      now.replace("T", " ").substring(0, 19)
    ]);
    
    await notifyNewPurchase(env, telegramId, username, firstName, programName, priceStr);
    
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: "🎉 <b>Заявка отправлена!</b>\n\nВ ближайшее время специалист Arrival Lab свяжется с вами для обсуждения деталей.",
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
    
    await saveUserState(env, telegramId, "Agency:waiting_for_full_name");
    await sendTelegramRequest(env, "editMessageText", {
      chat_id: telegramId,
      message_id: messageId,
      text: "📝 <b>Анкета агентства</b>\n\nШаг 1 из 3\n\nВведите ваше ФИО:",
      parse_mode: "HTML"
    });
    await sendTelegramRequest(env, "sendMessage", {
      chat_id: telegramId,
      text: "Введите ваше ФИО:",
      reply_markup: { remove_keyboard: true }
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

async function handleAdminData(request, env) {
  const url = new URL(request.url);
  
  const token = url.searchParams.get("token");
  if (token !== "ArrivalLabSecretToken") {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("twa ")) {
      return new Response("Unauthorized", { status: 401 });
    }
    const initData = authHeader.substring(4);
    const isValid = await validateTelegramInitData(initData, env.BOT_TOKEN);
    if (!isValid) {
      return new Response("Forbidden", { status: 403 });
    }
  }
  
  try {
    const users = await dbQuery(env, "users", "GET", { order: "id.desc" });
    const purchases = await dbQuery(env, "purchases", "GET", { order: "id.desc" });
    const apps = await dbQuery(env, "agency_applications", "GET", { order: "id.desc" });
    
    return new Response(JSON.stringify({ users, purchases, apps }), {
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

async function handleUpdatePurchase(request, env) {
  const url = new URL(request.url);
  
  const token = url.searchParams.get("token");
  if (token !== "ArrivalLabSecretToken") {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("twa ")) {
      return new Response("Unauthorized", { status: 401 });
    }
    const initData = authHeader.substring(4);
    const isValid = await validateTelegramInitData(initData, env.BOT_TOKEN);
    if (!isValid) {
      return new Response("Forbidden", { status: 403 });
    }
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
  const url = new URL(request.url);
  
  const token = url.searchParams.get("token");
  if (token !== "ArrivalLabSecretToken") {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("twa ")) {
      return new Response("Unauthorized", { status: 401 });
    }
    const initData = authHeader.substring(4);
    const isValid = await validateTelegramInitData(initData, env.BOT_TOKEN);
    if (!isValid) {
      return new Response("Forbidden", { status: 403 });
    }
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
      return 'twa ' + tg.initData;
    }

    async function loadData() {
      try {
        const header = getAuthHeader();
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const urlSuffix = token ? '?token=' + token : '';
        
        const res = await fetch('/api/admin/data' + urlSuffix, {
          headers: { 'Authorization': header }
        });
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

