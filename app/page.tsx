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

/**
 * Retorna a página principal do site
 * @returns JSX.Element
 */
export default function Home() {
  return (
    <>
      <main>
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
