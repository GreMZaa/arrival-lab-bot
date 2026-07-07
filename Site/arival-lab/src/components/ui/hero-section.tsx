"use client";
import { cn } from "@/lib/utils";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";

// Mock Next.js Link & Image for universal compatibility outside Next.js
const Link = ({ href, children, className, ...props }: any) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

const Image = ({ src, alt, width, height, className }: any) => (
  <img src={src} alt={alt} width={width} height={height} className={className} loading="lazy" />
);

export const blocksDesign = [
  {
    id: "avatar-design",
    name: "Разработка аватара",
    url: "#programs",
    des: "Индивидуальный дизайн Live2D / 3D персонажа под ваш стиль.",
    imgclass: "object-cover",
    textClass: "text-white",
    imgSrc: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "tracking-setup",
    name: "Калибровка трекинга",
    url: "#programs",
    des: "Настройка отслеживания мимики лица и движений тела.",
    imgclass: "object-contain",
    textClass: "text-primary",
    imgSrc: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "stream-setup",
    name: "Стриминг под ключ",
    url: "#programs",
    des: "Техническая подготовка OBS, сцен, оверлеев и звука.",
    imgclass: "object-contain",
    textClass: "text-primary",
    imgSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "producing",
    name: "Продюсирование",
    url: "#agency",
    des: "Помощь в продвижении, коллаборациях и росте аудитории.",
    imgSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "platforms",
    name: "Вывод на площадки",
    url: "#programs",
    des: "Запуск на Twitch, YouTube, Kick и китайских платформах.",
    imgSrc: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "community",
    name: "Агентство талантов",
    url: "#agency",
    des: "Вступление в дружное сообщество стримеров Oriva Talents.",
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=687&auto=format&fit=crop",
  },
];

function Others1() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  return (
    <main ref={timelineRef} className="bg-slate-950 text-white min-h-screen">
      <TimelineContent
        as="header"
        animationNum={1}
        timelineRef={timelineRef}
        className={cn(
          "w-full top-0 left-0 z-50 transition-all duration-300 relative pt-4 md:px-0 px-2"
        )}
      >
        <div
          className={cn(
            "2xl:max-w-6xl max-w-5xl p-2 2xl:px-4 px-4 h-full relative mx-auto flex justify-between backdrop-blur-2xl bg-white/5 border border-white/10 rounded-xl items-center"
          )}
        >
          <Link
            href="/"
            className="relative flex items-center gap-3 p-1 rounded-md"
          >
            <img src="/arrival_lab_logo.png" alt="Oriva Lab" className="w-8 h-8 rounded-full" />
            <span className="font-extrabold text-xl tracking-tight text-white">
              Oriva<span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Lab</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
              <a href="#programs" className="hover:text-white transition-colors">Программы</a>
              <a href="#agency" className="hover:text-white transition-colors">Агентство</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>
            <a
              href="https://t.me/ArrivalLabBOT"
              target="_blank"
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
              rel="noreferrer"
            >
              Запустить Бота
            </a>
          </div>
        </div>
      </TimelineContent>

      <div className="pt-24 pb-16 max-w-screen-2xl mx-auto px-4 relative">
        {/* Aurora glow effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <article className="w-fit mx-auto 2xl:max-w-5xl xl:max-w-4xl max-w-2xl text-center space-y-6 relative z-10">
          <TimelineContent
            as="a"
            href={"#agency"}
            animationNum={2}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="flex w-fit mx-auto items-center gap-2 rounded-full bg-violet-950/40 border border-violet-800/30 py-1 pl-1 pr-3 text-xs"
          >
            <div className="rounded-full bg-violet-500 px-2 py-0.5 text-xs text-white font-bold">
              Агентство
            </div>
            <p className="text-violet-200 sm:text-sm text-xs inline-block">
              ✨ Вступайте в команду
              <span className="px-1 font-semibold text-white">Oriva Talents</span>
            </p>
          </TimelineContent>

          <TimelineContent
            as="h1"
            animationNum={3}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="2xl:text-7xl text-white xl:text-6xl sm:text-5xl text-4xl leading-[110%] font-black tracking-tight"
          >
            Создайте свое цифровое{" "}
            <span className="font-extrabold bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              альтер-эго
            </span>
          </TimelineContent>

          <TimelineContent
            as="p"
            animationNum={4}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="lg:text-xl text-gray-300 sm:text-lg text-sm max-w-3xl mx-auto leading-relaxed"
          >
            Запускаем VTuber-карьеры под ключ. Помогаем подобрать образ, настраиваем оборудование для трекинга лица и тела, выводим на специализированные площадки и берем на продюсирование.
          </TimelineContent>

          <TimelineContent
            as="div"
            animationNum={5}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="flex justify-center gap-4 pt-4"
          >
            <a
              href="https://t.me/ArrivalLabBOT?start=website"
              target="_blank"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(124,58,237,0.25)]"
            >
              🚀 Начать подбор
            </a>
            <a
              href="#programs"
              className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold transition-all"
            >
              Наши программы
            </a>
          </TimelineContent>
        </article>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 pt-20 relative z-10">
          {blocksDesign.map((component, index) => {
            return (
              <div key={index}>
                <TimelineContent
                  as="a"
                  animationNum={index + 6}
                  timelineRef={timelineRef}
                  href={component?.url}
                  className="transition-all aspect-video rounded-xl backdrop-blur-sm overflow-hidden block border border-white/5 hover:border-white/20 group relative shadow-2xl"
                  rel="noreferrer"
                >
                  <figure className="relative h-full w-full overflow-hidden">
                    {component.imgSrc && (
                      <Image
                        src={component.imgSrc}
                        alt={component.name}
                        width={400}
                        height={400}
                        className={cn("w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105")}
                      />
                    )}
                  </figure>
                  <ProgressiveBlur
                    className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-full"
                    blurIntensity={0.8}
                  />
                  <div
                    className={cn(
                      "sm:py-4 py-2 sm:px-5 px-3 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"
                    )}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      {component.name}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {component.des}
                    </p>
                  </div>
                </TimelineContent>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Others1;
