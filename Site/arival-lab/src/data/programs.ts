import type { IconName } from '../lib/lucide-icons';

export interface Program {
  id: string;
  icon: IconName;
  title: string;
  subtitle: string;
  price: string;
  priceAmount?: number;
  badge?: string;
  badgeClass?: string;
  description: string;
  featuresHeader: string;
  features: string[];
  cta: string;
  /** Deep link intercepted by BuyApplyModals to open purchase/agency modal */
  ctaHref: string;
  popular?: boolean;
}

/** Card display order on the landing page */
export const programDisplayOrder: string[] = [
  'start',
  'launch',
  'restart',
  'platform_pro',
  'talents',
];

export const programs: Program[] = [
  {
    id: 'start',
    icon: 'rocket',
    title: 'START',
    subtitle: 'Самостоятельный запуск',
    price: 'Бесплатно',
    priceAmount: 0,
    badge: 'Популярно',
    badgeClass: 'badge-popular',
    description:
      'За несколько дней вы сможете самостоятельно выйти на свой первый стрим по подробным инструкциям.',
    featuresHeader: 'В программу входит:',
    features: [
      'Лицензия на готового виртуального персонажа',
      'Полная пошаговая инструкция по запуску',
      'Настройка VTuber-софта на компьютере',
      'Регистрация на стриминговых площадках',
      'Настройка выплат и безопасности',
      'База знаний и чек-лист первого эфира',
    ],
    cta: 'Скачать программу',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=download_start',
  },
  {
    id: 'launch',
    icon: 'settings',
    title: 'LAUNCH',
    subtitle: 'Запуск под ключ',
    price: '49 900 ₽',
    priceAmount: 49900,
    badge: 'Выбор команды',
    badgeClass: 'badge-team',
    popular: true,
    description:
      'Полностью готовая система. Мы берём всю техническую настройку и подготовку на себя.',
    featuresHeader: 'Всё из программы START, плюс:',
    features: [
      'Полная удалённая настройка вашего ПК',
      'Проверка камеры, микрофона и оборудования',
      'Регистрация аккаунтов и верификация',
      'Индивидуальное оформление профиля',
      'Первый тестовый эфир вместе с командой',
      'Техническая поддержка в течение 7 дней',
    ],
    cta: 'Купить программу',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_launch',
  },
  {
    id: 'restart',
    icon: 'refresh-cw',
    title: 'RESTART',
    subtitle: 'Переход на виртуальный формат',
    price: '39 900 ₽',
    priceAmount: 39900,
    badge: 'Для стримеров',
    badgeClass: 'badge-streamer',
    description:
      'Переход на виртуальный формат без необходимости начинать карьеру и раскрутку заново.',
    featuresHeader: 'В программу входит:',
    features: [
      'Лицензия на виртуального персонажа',
      'Анализ текущего канала и оборудования',
      'Интеграция VTuber в ваш софт',
      'Перенос существующих настроек и сцен',
      'Индивидуальный план удержания аудитории',
      'Сопровождение до первого стрима',
    ],
    cta: 'Купить программу',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_restart',
  },
  {
    id: 'platform_pro',
    icon: 'shield',
    title: 'PLATFORM PRO',
    subtitle: 'Специализированные площадки (18+)',
    price: 'от 59 900 ₽',
    priceAmount: 59900,
    badge: 'Спец. доступ',
    badgeClass: 'badge-special',
    description:
      'Полностью готовая система для работы на специализированных площадках с соблюдением анонимности.',
    featuresHeader: 'В программу входит:',
    features: [
      'Подбор специализированных платформ под цели',
      'Разбор правил и требований каждой площадки',
      'Настройка аккаунтов и анонимности',
      'Помощь с прохождением верификации',
      'Настройка приватных платёжных шлюзов',
      'Стратегия первых трансляций и раскрутки',
    ],
    cta: 'Купить программу',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_platform_pro',
  },
  {
    id: 'talents',
    icon: 'handshake',
    title: 'ORIVA TALENTS',
    subtitle: 'Агентская программа',
    price: '15% от вашего дохода',
    badge: 'Партнёрство',
    badgeClass: 'badge-agency',
    description:
      'Станьте частью агентства Oriva Lab и получите долгосрочное ведение вашей стриминг-карьеры.',
    featuresHeader: 'Всё из программы LAUNCH, плюс:',
    features: [
      'Персональный продюсер и стратегия развития',
      'Постоянный разбор статистики и контента',
      'Обновление виртуального персонажа',
      'Помощь в запуске сторонних проектов',
      'Приоритетная поддержка 24/7',
    ],
    cta: 'Подать заявку',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=agency_apply',
  },
];

export function getProgramsInDisplayOrder(): Program[] {
  const byId = new Map(programs.map((p) => [p.id, p]));
  return programDisplayOrder
    .map((id) => byId.get(id))
    .filter((p): p is Program => p !== undefined);
}

export function getProgramById(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}
