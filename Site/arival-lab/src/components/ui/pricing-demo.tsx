import { PricingContainer, type PricingPlan } from "@/components/ui/pricing-container";

export function PricingDemo() {
    const handlePlanClick = (planId: string) => {
        if (typeof window !== "undefined" && (window as any).openPurchaseModal) {
            (window as any).openPurchaseModal(planId);
        }
    };

    const ORIVA_PLANS: PricingPlan[] = [
        {
            name: "START",
            monthlyPrice: 0,
            yearlyPrice: 0,
            features: [
                "Базовое руководство PDF",
                "Обзор софта для трекинга",
                "Подбор ПК и веб-камеры",
                "Моментальный старт"
            ],
            isPopular: false,
            accent: "bg-rose-500",
            rotation: -2,
            buttonText: "СКАЧАТЬ БЕСПЛАТНО",
            onClick: () => handlePlanClick("start")
        },
        {
            name: "RESTART",
            monthlyPrice: 39900,
            yearlyPrice: 31900,
            features: [
                "Индивидуальный VTuber-образ",
                "Настройка VTube Studio",
                "Аудит вашего оборудования",
                "Месяц поддержки куратора"
            ],
            isPopular: true,
            accent: "bg-blue-600",
            rotation: 1,
            buttonText: "КУПИТЬ RESTART",
            onClick: () => handlePlanClick("restart")
        },
        {
            name: "LAUNCH",
            monthlyPrice: 49900,
            yearlyPrice: 39900,
            features: [
                "Аватар под ключ (Live2D/3D)",
                "Сцены OBS & Оверлеи под ключ",
                "Полная калибровка трекинга",
                "Продюсирование Oriva Talents"
            ],
            isPopular: false,
            accent: "bg-purple-600",
            rotation: 2,
            buttonText: "КУПИТЬ LAUNCH",
            onClick: () => handlePlanClick("launch")
        }
    ];

    return (
        <PricingContainer
            title="Программы запуска VTuber"
            plans={ORIVA_PLANS}
        />
    );
}
