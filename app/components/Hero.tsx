import { Container, Title } from ".";
import clsx from "clsx";
import { TopClip, BottomClip } from "./TopClip";

export const Hero = () => {
  return (
    <section className="bg-midnight relative md:pt-[10rem]">
      <Container className="pt-[10rem] md:translate-x-[100px]">
        <span className="relative">
          <div className="flex flex-col gap-[3.12rem] ">
            <Title>
              O Maior evento front-end <br /> de Campinas está de volta!
            </Title>
            <div className="flex md:flex-row flex-col gap-[3rem]">
              <div className="flex flex-col gap-[1rem] md:w-[36rem]">
                <p data-aos="fade-up" className="leading-[150%] text-lg">
                  <span className="font-bold">
                    Front in Campinas está de volta em 2024!{" "}
                  </span>
                  E com ele toda experiência da comunidade de tecnologia!
                </p>
                <p data-aos="fade-up" className="leading-[150%] text-lg">
                  <span className="font-bold">
                    Networking, Inovação, Comunidade e Inclusão
                  </span>
                  são os princípios que guiam o Front in Campinas.
                </p>
                <p data-aos="fade-up" className="leading-[150%] text-lg">
                  É um evento sem fins lucrativos para compartilhar o
                  conhecimento entre a comunidade, com o intuito de fortalecê-la
                  ainda mais. É um espaço para interação e diversão, servindo de
                  inspiração para aqueles que estão começando e renovando as
                  energias daqueles que precisam.
                </p>
                <p data-aos="fade-up" className="leading-[150%] text-lg">
                  Todas as pessoas em todas as áreas de desenvolvimento podem
                  participar do evento. Além do networking, elas poderão
                  aprender e conversar sobre carreira e soft skils necessários
                  para toda a área de tecnologia.
                </p>
              </div>
              <div className="md:w-[32rem]">
                <img
                  data-aos="fade-up"
                  className="w-full"
                  aria-label="Foto com todas a pessoas que participaram do frontin campinas 2019"
                  src="/static/hero-image-1.png"
                />
              </div>
            </div>
          </div>
          <span
            className={clsx(
              "inline-block uppercase text-[6.375rem] opacity-10 -rotate-90 absolute right-[87%] bottom-[65%] font-[700] "
            )}
          >
            frontin
          </span>
        </span>
      </Container>
      <TopClip />
      <BottomClip />
    </section>
  );
};
