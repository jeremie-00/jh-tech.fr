"use client";

import { useState } from "react";
import ScrollDown from "./components/buttons/ScrollDown";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Works from "./components/sections/Works";
import BgAnimate from "./components/ui/BgAnimate";
import { ScrollText } from "./components/ui/ScrollText";

import FadeInSection from "./components/ui/FadeInSection";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hash, setHash] = useState("#home");

  const handleClick = (href: string) => {
    setHash(href);
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <main className="">
      <BgAnimate />

      <Header
        handleClick={handleClick}
        isScrolling={isScrolling}
        hash={hash}
        setHash={setHash}
      />

      <FadeInSection direction="default">
        <ScrollDown />
        <Hero />
      </FadeInSection>
      <About />
      <ScrollText text="Compétences" />
      <Skills />
      <ScrollText text="projets" />
      <Works />
      <Contact />
      <Footer handleClick={handleClick} />
    </main>
  );
}
