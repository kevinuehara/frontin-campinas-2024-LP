"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import { Footer, backgroundHeader } from "../components";
import clsx from "clsx";

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
      <main className={clsx(backgroundHeader)}>
        <div className="max-w-[1200px] m-auto flex gap-[4rem]">
          <LeftSide />
          <RightSide />
        </div>
        <Footer />
      </main>
    </>
  );
}

const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="uppercase text-[1.5rem] mb-[1rem]">{children}</h2>
);

const SectionList = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc list-inside pl-[2rem] flex gap-[0.625rem] flex-col">
    {children}
  </ul>
);

function LeftSide({}) {
  return (
    <div className="flex gap-[2rem] flex-col text-[1.125rem] max-w-[781px]">
      <section>
        <h1 className="uppercase text-[3rem] font-bold">Call 4 papers</h1>
        <p>
          O Call 4 Papers é o processo para submissão de propostas de palestra
          ou pitch para apresentar no Front in Campinas 2024. Todas as propostas
          serão avaliadas por um comitê técnico, composto pelas pessoas
          organizadoras do evento.
        </p>
      </section>
      <section>
        <SectionTitle>Tipos de apresentação</SectionTitle>
        <SectionList>
          <li>
            <strong>Pitch, 10 minutos</strong>
            {/* <br /> */}
            Apresentação rápida para pessoas que tem um conteúdo interessante a
            compartilhar, mas de forma breve, em menos tempo que nas palestras
            convencionais. É uma boa forma de fazer sua primeira apresentação.
          </li>
          <li>
            <strong>Palestra, 25 minutos</strong>
            <br />
            Apresentação mais longa, para pessoas que desejam abordar um
            conteúdo de forma mais detalhada e aprofundada.
          </li>
        </SectionList>
      </section>
      <section>
        <SectionTitle>Temas</SectionTitle>
        <p className="pl-[2rem] mb-[10px]">
          Convidamos propostas que abordem aspectos técnicos e de carreira da
          área. Os temas podem incluir, mas não se limitam a:
        </p>
        <SectionList>
          <li>Front-end</li>
          <li>Testes</li>
          <li>UX</li>
          <li>Carreira</li>
          <li>CSS</li>
          <li>Javascript/Typescript</li>
          <li>Angular</li>
          <li>React</li>
          <li>Vue</li>
        </SectionList>
      </section>
    </div>
  );
}

function RightSide({}) {
  return (
    <div className="min-w-[251px]">
      <aside>
        <SectionTitle>datas importantes</SectionTitle>
        <ul>
          <li>
            <strong>Submissão:</strong> até 25 de abril
          </li>
          <li>
            <strong>Resultado:</strong> 10 a 15 de maio
          </li>
          <li>
            <strong>Apresentação:</strong> 25 de maio
          </li>
        </ul>
      </aside>
    </div>
  );
}
