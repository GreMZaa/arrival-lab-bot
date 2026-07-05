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
    about: about
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
  const text = `📝 <b>Новая заявка в агентство</b>\n\nID: <code>${telegramId}</code>\nUsername: @${username || "нет"}\nФИО: ${fullName}`;
  await sendTelegramRequest(env, "sendMessage", { chat_id: env.ADMIN_CHAT_ID, text: text, parse_mode: "HTML" }).catch(() => {});
}

// ── Update Handlers ─────────────────────────────────────

async function handleMessage(message, env) {
  const telegramId = message.from.id;
  const text = message.text ? message.text.trim() : "";
  const username = message.from.username;
  const firstName = message.from.first_name || "";
  
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

async function handleCallbackQuery(callback, env) {
  const telegramId = callback.from.id;
  const data = callback.data;
  const username = callback.from.username;
  const firstName = callback.from.first_name || "";
  const messageId = callback.message.message_id;
  
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

async function handleUpdate(update, env) {
  if (update.message) {
    await handleMessage(update.message, env);
  } else if (update.callback_query) {
    await handleCallbackQuery(update.callback_query, env);
  }
}

// ── Cloudflare Worker Fetch Handler ──────────────────────

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "POST") {
      return new Response("OK", { status: 200 });
    }
    
    try {
      const payload = await request.json();
      await handleUpdate(payload, env);
    } catch (e) {
      console.error("Worker handler error:", e.stack || e.message);
    }
    
    return new Response("OK", { status: 200 });
  }
};
