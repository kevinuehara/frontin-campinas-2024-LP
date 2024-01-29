import { Footer } from "./components/Footer";

import Sponsor from "./components/Sponsor";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { HostsCards } from "./HostsCards";
import { StaffCards } from "./StaffCards";
import { RealizationCards } from "./RealizationCards";
import { Speakers } from "./Speakers";

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
