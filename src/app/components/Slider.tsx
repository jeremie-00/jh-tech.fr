"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";
import { useIsMobile } from "../hook/useMobile";
import { CustomBtn, IconName } from "./buttons/custom-buttons";
import { CustomCard } from "./cards/CustomCard";
import ToolTip from "./ui/ToolTip";

interface SliderCard {
  name: string;
  text: string;
  url: string;
  url_mobile: string;
  alt: string;
  skills?: string[];
  liens: {
    title: string;
    href: string;
    target: boolean;
    iconName: string;
  }[];
}

export function Slider({ cards }: { cards: SliderCard[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const [visibleImages, setVisibleImages] = useState<boolean[]>(
    new Array(cards.length).fill(false)
  );
  const [visibleBtn, setVisibleBtn] = useState(false);

  const toggleImage = (index: number) => {
    setVisibleImages((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
    setVisibleBtn(!visibleBtn);
  };

  const handleNav = (index: number) => {
    setActiveIndex(index);
    setVisibleBtn(false);
    setVisibleImages(new Array(cards.length).fill(false));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    setVisibleBtn(false);
    setVisibleImages(new Array(cards.length).fill(false));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
    setVisibleBtn(false);
    setVisibleImages(new Array(cards.length).fill(false));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 ">
      {/* Conteneur principal avec les gestionnaires de balayage */}
      <div
        {...handlers}
        className="relative overflow-hidden w-full h-full min-w-[200px] min-h-[400px] max-w-[800px] max-h-[1000px] flex items-center justify-center"
      >
        {/* Conteneur des images */}

        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full min-w-[200px] min-h-[400px] max-w-[800px] max-h-[800px]"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${cards.length * 100}%`,
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full h-full flex justify-center flex-shrink-0"
            >
              <CustomCard theme="slider" onClick={() => toggleImage(idx)}>
                <div className="font-bold text-4xl text-muted-foreground z-20">
                  0{idx + 1}.
                </div>
                <h3 className="text-4xl font-light z-20">{card.name}</h3>
                <h4 className="sm:w-2/3 text-sm font-light flex flex-1 text-left items-center text-muted-foreground z-20">
                  {card.text}
                </h4>
                <div className="absolute sm:text-[14rem] text-[10rem] text-stroke bottom-0 left-16 w-full z-10 whitespace-nowrap">
                  {card.name}
                </div>

                <Image
                  src={
                    isMobile
                      ? card.url_mobile || "/projet/kasa/cover-mobile.png"
                      : card.url
                  }
                  alt={card.alt}
                  width={850}
                  height={550}
                  className={clsx(
                    "absolute w-full h-full z-30 top-0 left-0 object-cover transition-all duration-300",
                    "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                    visibleImages[idx]
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-full"
                  )}
                  quality={90}
                />

                <div className="w-full flex md:justify-between max-md:flex-col gap-4 z-20">
                  {card.skills && card.skills.length > 0 && (
                    <div className="flex flex-wrap items-start gap-2 text-sm font-light">
                      {card.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-primary">{skill}</span>
                          {card.skills && idx !== card.skills.length - 1 && (
                            <span className="text-muted-foreground">/</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex place-content-end gap-4 z-50">
                    {card.liens.map((lien, idx) => {
                      if (lien.target) {
                        return (
                          <div key={idx} className={`relative z-20 group`}>
                            <CustomBtn
                              href={lien.href}
                              theme="round"
                              size="xl"
                              className={clsx(
                                "relative z-50 group-hover:bg-primary transition-colors duration-300",
                                visibleBtn ? "bg-primary" : "bg-primary/20"
                              )}
                              target={lien.target}
                              iconName={lien.iconName as IconName}
                              ariaLabel={`Aller sur ${lien.title}`}
                            >
                              {/* <span className="md:text-[1.25rem] text-[1rem]">
                          {lien.title}
                        </span> */}
                              <span className="sr-only">{lien.title}</span>
                            </CustomBtn>
                            <ToolTip
                              txt={lien.title}
                              color="primary"
                              isVisible={visibleBtn}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </CustomCard>
            </div>
          ))}
        </div>
      </div>
      {/* Dots de navigation */}
      {/* Contrôles */}
      <div className="flex items-center justify-center gap-12 mt-4 ">
        <CustomBtn
          theme="round"
          size="lg"
          className={clsx(
            cards.length <= 1 ? "hidden" : "cursor-pointer",
            "max-md:hidden"
          )}
          onClick={handlePrev}
          ariaLabel="Précédent"
        >
          <IoChevronBack />
        </CustomBtn>
        <div className="flex items-center justify-center gap-3">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleNav(idx)}
              className={clsx(
                "w-3 h-3 rounded-full transition-colors duration-300",
                activeIndex === idx
                  ? "bg-primary scale-110"
                  : "bg-muted hover:bg-primary/50"
              )}
              aria-label={`Aller à la carte ${idx + 1}`}
            />
          ))}
        </div>
        <CustomBtn
          theme="round"
          size="lg"
          className={clsx(
            cards.length <= 1 ? "hidden" : "cursor-pointer",
            "max-md:hidden"
          )}
          onClick={handleNext}
          ariaLabel="Suivant"
        >
          <IoChevronForward />
        </CustomBtn>
      </div>
    </div>
  );
}
