"use client";
import {
  Hero,
  Header,
  HostsCards,
  RealizationCards,
  StaffCards,
  Sponsor,
  Footer,
} from "./components";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

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
        <HostsCards />
        <StaffCards />
        <RealizationCards />
        {/* <Speakers /> */}
        <Sponsor />
        <Footer />
      </main>
    </>
  );
}
