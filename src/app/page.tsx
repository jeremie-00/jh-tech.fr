"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ScrollDown from "./components/buttons/ScrollDown";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Works from "./components/sections/Works";
import { ScrollText } from "./components/ui/ScrollText";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hash, setHash] = useState("#home");

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  const handleClick = (href: string) => {
    setHash(href);
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <main className="">
      <Header
        handleClick={handleClick}
        isScrolling={isScrolling}
        hash={hash}
        setHash={setHash}
      />

      {/* Image de fond avec parallaxe + dézoom */}
      <motion.div
        style={{ y, scale }}
        className="fixed w-screen h-screen -z-10 pointer-events-none md:-bottom-30 md:-right-20 -bottom-60 -right-5"
      >
        <Image
          src={"Bg-hero.svg"}
          alt={"fond avec des carreaux"}
          fill
          quality={90}
          className="object-contain "
        />
      </motion.div>

      <ScrollDown />
      <Hero />
      <About />
      <ScrollText text="services" />
      <Skills />
      <ScrollText text="projets" />
      <Works />
      <Contact />
      <Footer handleClick={handleClick} />
    </main>
  );
}
