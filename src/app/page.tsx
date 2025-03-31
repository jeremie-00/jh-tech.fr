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
      <div className="min-md:px-12 px-4 max-w-[1400px] mx-auto">
        <ScrollDown />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
      <Footer handleClick={handleClick} />
    </main>
  );
}
