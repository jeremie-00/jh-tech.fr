"use client";
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
      <Image
        src={"Bg-hero.svg"}
        alt={"fond avec des carreaux"}
        width={150}
        height={150}
        quality={90}
        className="fixed w-screen h-screen object-contain md:-bottom-30 md:-right-20 -bottom-60 -right-5 -z-1"
      />
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
