import ScrollDown from "./components/buttons/ScrollDown";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Works from "./components/sections/Works";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="min-md:px-12 px-4 max-w-[1400px] mx-auto">
        <ScrollDown />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
