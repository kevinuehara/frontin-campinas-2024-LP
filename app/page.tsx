import { Footer } from "./components/Footer";

import Sponsor from "./components/Sponsor";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HostsCards } from "./components/HostsCards";
import { StaffCards } from "./components/StaffCards";
import { RealizationCards } from "./components/RealizationCards";
import { Speakers } from "./components/Speakers";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center align-center">
        <Header />
        <Hero />
        <HostsCards />
        <StaffCards />
        <RealizationCards />
        <Speakers />
        <Sponsor />
        <Footer />
      </main>
    </>
  );
}
