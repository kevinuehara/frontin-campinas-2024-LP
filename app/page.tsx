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
      <main className="flex flex-col justify-center align-center">
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
