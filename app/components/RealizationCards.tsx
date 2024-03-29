import Image from "next/image";
import { Container, Subtitle, Title, TopClip } from ".";
import clsx from "clsx";

export const RealizationCards = () => {
  return (
    <section className="w-full bg-black relative text-white">
      <TopClip color="black" />
      <Container className="relative md:translate-x-[100px]">
        <div className="flex 100vw pt-[10rem] pb-[25rem]">
          <div className="flex flex-col w-full gap-[4rem]">
            <span className="flex flex-col gap-[1rem]">
              <Title>Realização</Title>
              <Subtitle
                pre="Organizadores e patrocinadores do"
                bold="Front In Campinas 2024"
              />
            </span>
            <div className="flex flex-col items-center gap-[5rem] md:flex-row flex-wrap">
              <Image
                src="/company/polis.png"
                alt="logo da empresa polis"
                width={200}
                height={200}
                data-aos="fade-up"
                data-aos-delay="100"
                aria-label="logo da empresa polis"
                priority
              />
              <Image
                src="/company/cpqd.png"
                alt="logo da empresa cpqd"
                width={200}
                height={200}
                data-aos="fade-up"
                data-aos-delay="200"
                aria-label="logo da empresa cpqd"
                priority
              />
              <Image
                src="/company/nodebr-white.png"
                alt="logo da nodebr"
                width={300}
                height={300}
                data-aos="fade-up"
                data-aos-delay="300"
                aria-label="logo da nodebr"
                priority
              />
            </div>
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase text-[6.375rem] opacity-10 -rotate-90 absolute right-[81%] bottom-[35%] font-[700] "
          )}
        >
          Realização
        </span>
      </Container>
    </section>
  );
};
