"use client";
import { useIsMobile } from "@/app/hook/useMobile";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import datas from "../../datas.json";
import { CustomBtn } from "../buttons/custom-buttons";
import FadeInSection from "../ui/FadeInSection";

interface NavBarreProps {
  links: { title: string; href: string }[];
  hash: string;
  handleClick: (href: string) => void;
}

function NavBarre({ links, hash, handleClick }: NavBarreProps) {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-8 px-8 py-2 max-md:hidden">
        {links.map((link) => (
          <li key={link.title} className="relative">
            <CustomBtn
              href={link.href}
              theme="underline"
              ariaLabel={`Aller à la section ${link.title}`}
              className={`${hash === link.href ? "after:scale-100" : ""}`}
              onClick={() => handleClick(link.href)}
            >
              {link.title}
            </CustomBtn>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavMobile({ links, hash, handleClick }: NavBarreProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickandToggleMenu = (href: string) => {
    handleClick(href);
    toggleMenu();
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-1">
      <CustomBtn
        theme="outline"
        ariaLabel={`Menu`}
        iconName="menu"
        size="xl"
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>
      </CustomBtn>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            layout
            ref={menuRef}
            className="absolute top-0 z-10 right-0 w-[280px] border-l-2 border-border rounded-lg"
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="bg-background border border-border/20 border-r-0 rounded-l-lg p-4 flex flex-col items-start justify-start gap-16 h-screen">
              <div className="w-full flex items-center justify-between">
                <CustomBtn
                  onClick={toggleMenu}
                  theme="default"
                  ariaLabel="Fermer le menu"
                  iconName="close"
                  size="xl"
                >
                  <span className="sr-only">Fermer le menu</span>
                </CustomBtn>
              </div>
              <nav>
                <ul className="flex flex-col items-start gap-4">
                  {links.map((link) => {
                    return (
                      <li key={link.title} className="relative">
                        <CustomBtn
                          href={link.href}
                          theme="hoverPrimary"
                          className={hash === link.href ? "text-primary" : ""}
                          ariaLabel={`Aller à la section ${link.title}`}
                          onClick={() => handleClickandToggleMenu(link.href)}
                        >
                          {link.title}
                        </CustomBtn>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({
  hash,
  setHash,
  isScrolling,
  handleClick,
}: {
  hash: string;
  setHash: React.Dispatch<React.SetStateAction<string>>;
  isScrolling: boolean;
  handleClick: (href: string) => void;
}) {
  const isMobile = useIsMobile();

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      const sections = document.querySelectorAll("section[id]");
      let currentHash = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentHash = `#${section.id}`;
        }
      });

      if (currentHash && currentHash !== hash) {
        setHash(currentHash);
        window.history.replaceState(null, "", currentHash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hash, isScrolling, setHash]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const newHash = `#${visibleSection.target.id}`;
          setHash(newHash);
          window.history.replaceState(null, "", newHash);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [setHash]);

  useEffect(() => {
    const updateHashOnLoad = () => {
      if (window.location.hash) {
        setHash(window.location.hash);
        document
          .getElementById(window.location.hash.slice(1))
          ?.scrollIntoView();
      }
    };

    updateHashOnLoad();
    window.addEventListener("hashchange", updateHashOnLoad);
    return () => window.removeEventListener("hashchange", updateHashOnLoad);
  }, [setHash]);

  return (
    <header
      className={`sticky top-0 z-50 md:px-8 md:py-3 p-4 bg-background/60 backdrop-blur-sm transition-transform duration-300`}
    >
      <div className="w-full flex items-center justify-between">
        <CustomBtn
          href="#home"
          theme="default"
          onClick={() => handleClick("#home")}
        >
          <span
            className={`w-fit h-fit flex items-center gap-2 text-xl font-bold tracking-wider transition-all duration-300 ease-in-out ${
              hash === "#home" ? "text-primary" : ""
            }`}
          >
            <FadeInSection direction="left">
              <div
                className={`w-3 h-3 rounded-full self-center translate-y-[0.125rem] ${
                  hash === "#home" ? "bg-foreground" : "bg-primary"
                }`}
              />
            </FadeInSection>
            {datas.home.title.split("").map((letter, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1} direction="left">
                <span key={idx} className="tracking-[-0.4rem] font-light">
                  {letter}
                </span>
              </FadeInSection>
            ))}
          </span>
        </CustomBtn>
        <FadeInSection direction="down">
          {isMobile ? (
            <NavMobile
              links={datas.links}
              hash={hash}
              handleClick={handleClick}
            />
          ) : (
            <NavBarre
              links={datas.links}
              hash={hash}
              handleClick={handleClick}
            />
          )}
        </FadeInSection>
      </div>
    </header>
  );
}
