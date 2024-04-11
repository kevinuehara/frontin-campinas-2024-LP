"use client";
import { Hero, Header, RealizationCards, Footer } from "./components";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import { Schedule } from "./components/Schedule";
import { Keynotes } from "./components/Keynotes";
import { Local } from "./components/Local";

/**
 * Retorna a página principal do site
 * @returns JSX.Element
 */
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <main className="bg-black max-w-full	overflow-hidden	">
        <Header />
        <Hero />
        <Keynotes />
        <Local />
        <Schedule />
        <RealizationCards />
        <Footer />
      </main>
    </>
  );
}
