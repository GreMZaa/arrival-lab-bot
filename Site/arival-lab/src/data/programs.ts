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
  'archive_002_basic',
  'archive_002_2d',
  'archive_002_3d',
  'archive_002_premium',
  'archive_003',
  'archive_004',
  'talents',
];

export const programs: Program[] = [
  {
    id: 'archive_002_basic',
    icon: 'rocket',
    title: 'АРХИВ 002',
    subtitle: 'Базовый запуск с нуля',
    price: '14 900 ₽',
    priceAmount: 14900,
    badge: 'Базовый',
    badgeClass: 'badge-streamer',
    description:
      'Пошаговое руководство по самостоятельному запуску VTuber с нуля. Доступный по цене вход в профессию.',
    featuresHeader: 'В архив входит:',
    features: [
      '✅ Полный архив: 8 этапов + доп. раздел (28 страниц)',
      '✅ Пошаговый запуск — оборудование, образ, OBS, первый эфир, платформы',
      '✅ Чек-листы, глоссарий, разбор частых ошибок',
      '✅ Поддержка 24/7',
      '❌ Скидка на готовую модель',
      '❌ Личное сопровождение',
      '❌ Модель в подарок',
    ],
    cta: 'Купить архив',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_archive_002_basic',
  },
  {
    id: 'archive_002_2d',
    icon: 'palette',
    title: 'АРХИВ 002 + 2D',
    subtitle: 'Архив + 2D-аватар',
    price: '29 900 ₽',
    priceAmount: 29900,
    badge: 'модель -50%',
    badgeClass: 'badge-popular',
    description:
      'Всё из базового архива плюс создание индивидуального 2D-персонажа со скидкой 50%.',
    featuresHeader: 'В архив входит:',
    features: [
      '✅ Всё из базового архива',
      '✅ Скидка 50% на создание 2D-аватара',
      '✅ Помощь с полной сборкой — от заказа до настройки в софте',
      '❌ Личное сопровождение по запуску',
      '❌ Модель в подарок',
    ],
    cta: 'Купить пакет',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_archive_002_2d',
  },
  {
    id: 'archive_002_3d',
    icon: 'bot',
    title: 'АРХИВ 002 + 3D',
    subtitle: 'Архив + 3D-аватар',
    price: '34 900 ₽',
    priceAmount: 34900,
    badge: 'модель -50%',
    badgeClass: 'badge-popular',
    description:
      'Всё из базового архива плюс создание 3D/VRM-модели со скидкой 50%.',
    featuresHeader: 'В архив входит:',
    features: [
      '✅ Всё из базового архива',
      '✅ Скидка 50% на создание 3D/VRM-модели',
      '✅ Помощь с полной сборкой — от заказа до настройки в софте',
      '❌ Личное сопровождение по запуску',
      '❌ Модель в подарок',
    ],
    cta: 'Купить пакет',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_archive_002_3d',
  },
  {
    id: 'archive_002_premium',
    icon: 'settings',
    title: 'АРХИВ 002 PREMIUM',
    subtitle: 'Полное сопровождение',
    price: '49 900 ₽',
    priceAmount: 49900,
    badge: 'Выбор команды',
    badgeClass: 'badge-team',
    popular: true,
    description:
      'Личное сопровождение до первого эфира. Мы настраиваем всё за вас, а модель вы получаете в подарок.',
    featuresHeader: 'В пакет входит:',
    features: [
      '✅ Всё из базового архива',
      '✅ Личное сопровождение — проходим все настройки вместе',
      '✅ Помогаем скачать и настроить все программы',
      '✅ Помощь с нишей и стратегией первых эфиров',
      '✅ 2D или 3D модель — в подарок',
      '✅ Полный запуск с готовым планом на первую неделю',
    ],
    cta: 'Купить Premium',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_archive_002_premium',
  },
  {
    id: 'archive_003',
    icon: 'shield',
    title: 'АРХИВ 003',
    subtitle: 'Специализированный доступ',
    price: 'от 59 900 ₽',
    priceAmount: 59900,
    badge: '18+ / анонимность',
    badgeClass: 'badge-special',
    description:
      'Полный архив и сопровождение по запуску на специализированных площадках с соблюдением полной анонимности.',
    featuresHeader: 'В архив входит:',
    features: [
      '✅ Полный архив: 19 разделов, паспорт профессии, план на первую неделю',
      '✅ Полный путь: анонимность, оборудование, платформы, финансы, образ, доход, юридика',
      '✅ Готовый промпт для создания паспорта персонажа',
      '✅ Чек-листы к каждому разделу',
      '✅ Поддержка 24/7',
      '✅ Скидка 50% на создание 3D/VRM-модели',
      '✅ Мы помогаем полностью собрать модель — от заказа до настройки в софте',
    ],
    cta: 'Купить архив',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_archive_003',
  },
  {
    id: 'archive_004',
    icon: 'refresh-cw',
    title: 'АРХИВ 004 — РЕСТАРТ',
    subtitle: 'Переход на виртуальный формат',
    price: '39 900 ₽',
    priceAmount: 39900,
    badge: 'Для стримеров',
    badgeClass: 'badge-streamer',
    description:
      'Инструкция и сопровождение по переходу с веб-камеры на виртуальный формат (VTuber) без потери аудитории.',
    featuresHeader: 'В архив входит:',
    features: [
      '✅ Полный архив: 24 страницы, 6 фаз перехода',
      '✅ Финансовый план перехода (3 сценария + рекомендованный план на 4 месяца)',
      '✅ Готовый промпт для генерации персонажа-аватара',
      '✅ Инструкция по OBS + VTube Studio с шаблоном сцен и переходов',
      '✅ Готовые шаблоны: объявление для аудитории, Tip Menu, чек-лист точек остановки',
      '✅ Реалистичная статистика по росту зрителей и дохода',
      '✅ Глоссарий терминов',
      '✅ Поддержка 24/7',
      '✅ Готовая VRM-модель',
    ],
    cta: 'Купить архив',
    ctaHref: 'https://t.me/ArrivalLabBOT?start=buy_archive_004',
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
    featuresHeader: 'В программу входит:',
    features: [
      '✅ Персональный продюсер и стратегия развития',
      '✅ Постоянный разбор статистики и контента',
      '✅ Обновление виртуального персонажа',
      '✅ Помощь в запуске сторонних проектов',
      '✅ Приоритетная поддержка 24/7',
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

