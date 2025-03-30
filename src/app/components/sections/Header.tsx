"use client";
import { useIsMobile } from "@/app/hook/useMobile";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import datas from "../../datas.json";
import { CustomBtn } from "../buttons/custom-buttons";

interface NavBarreProps {
  links: { title: string; href: string }[];
  hash: string;
  setHash: React.Dispatch<React.SetStateAction<string>>;
}

function NavBarre({ links, hash, setHash }: NavBarreProps) {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-1 px-8 py-2">
        {links.map((link) => (
          <li key={link.title} className="relative">
            <CustomBtn
              href={link.href}
              theme="highlight"
              ariaLabel={`Aller à la section ${link.title}`}
              className={`px-5 py-1 ${
                hash === link.href ? "bg-primary-foreground" : ""
              }`}
              onClick={() => setHash(link.href)}
            >
              {link.title}
            </CustomBtn>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavMobile({ links, hash, setHash }: NavBarreProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClick = (href: string) => {
    setHash(href);
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
        //href={link.href}
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
                          onClick={() => handleClick(link.href)}
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

export default function Header() {
  const isMobile = useIsMobile();
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Mettre à jour le hash lors du chargement de la page ou des changements d'URL
    const updateHash = () => setHash(window.location.hash);

    // Initialisation
    updateHash();

    // Ajouter un écouteur pour les changements de hash
    window.addEventListener("hashchange", updateHash);

    // Nettoyage
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full flex items-center justify-between md:px-8 md:py-3 p-4 bg-background/60 backdrop-blur-sm shadow-custom transition-transform duration-300`}
    >
      <CustomBtn href="#home" theme="default" onClick={() => setHash("#home")}>
        <span
          className={`w-fit h-fit flex items-center gap-2 text-xl font-bold tracking-wider transition-all duration-300 ease-in-out ${
            hash === "#home" ? "text-primary" : ""
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full  self-center translate-y-[0.125rem] ${
              hash === "#home" ? "bg-foreground" : "bg-primary"
            }`}
          />
          {datas.home.title}
        </span>
      </CustomBtn>
      {isMobile ? (
        <NavMobile links={datas.links} hash={hash} setHash={setHash} />
      ) : (
        <NavBarre links={datas.links} hash={hash} setHash={setHash} />
      )}
    </header>
  );
}
