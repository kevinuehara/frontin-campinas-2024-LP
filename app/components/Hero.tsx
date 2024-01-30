import { Container, Title } from ".";
import { css } from "@emotion/css";
import { colors } from "../assets/colors";
import clsx from "clsx";

export const TopClip = ({
  color = "darkGray",
}: {
  color?: keyof typeof colors;
}) => (
  <span
    className={css({
      position: "absolute",
      background: colors[color],
      bottom: "100%",
      width: "100%",
      height: "500px",
      WebkitClipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
      clipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
    })}
  />
);

export const BottomClip = ({
  color = "darkGray",
}: {
  color?: keyof typeof colors;
}) => (
  <span
    className={css({
      position: "absolute",
      background: colors[color],
      top: "100%",
      zIndex: 20,
      width: "100%",
      height: "40rem",
      WebkitClipPath: "polygon(100% 0, 0 0, 100% 20%)",
      clipPath: "polygon(100% 0, 0 0, 100% 20%)",
    })}
  />
);

export const Hero = () => {
  return (
    <section className="bg-midnight relative">
      <Container className="pt-[10rem] translate-x-[100px]">
        <span className="relative">
          <div className="flex flex-col gap-[3.12rem] ">
            <Title>
              O Maior evento front-end <br /> de Campinas está de volta!
            </Title>
            <div className="flex gap-[3rem]">
              <div className="flex flex-col gap-[1rem] w-[36rem]">
                <p data-aos="fade-up" className="leading-[150%] text-lg">
                  <span className="font-bold">
                    Front In Campinas estará de volta em 2024!{" "}
                  </span>
                  E com ele toda experiência da comunidade de tecnologia!
                </p>
                <p data-aos="fade-up" className="leading-[150%] text-lg">
                  <span className="font-bold">
                    Networking, Inovação, Comunidade e Inclusão{" "}
                  </span>
                  são os princípios que guiam o FrontIn Campinas.
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
                  aprender e conversar sobre carreira e softskils necessários
                  para toda a área de tecnologia.
                </p>
              </div>
              <div className="w-[32rem]">
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
              "inline-block uppercase text-[6.375rem] opacity-10 -rotate-90 absolute right-[77%] bottom-[48%] font-[700] "
            )}
          >
            Organização
          </span>
        </span>
      </Container>
      <TopClip />
      <BottomClip />
    </section>
  );
};
