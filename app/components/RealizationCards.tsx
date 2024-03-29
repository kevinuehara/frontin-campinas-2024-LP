import Image from "next/image";
import { Container, Subtitle, Title, TopClip, TypographySubtitle } from ".";
import clsx from "clsx";

export const RealizationCards = () => {
  return (
    <section className="w-full bg-midnight relative text-white">
      <TopClip />
      <Container className="relative md:translate-x-[100px]">
        <div className="flex 100vw pt-[10rem] pb-[25rem]">
          <div className="flex flex-col w-full gap-[4rem]">
            <RealizationCardsTitleArea />
            <div className="flex flex-col gap-[4rem]">
              <PartnerArea text="Realização">
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
              </PartnerArea>

              <PartnerArea text="Apoio">
                <Image
                  src="/company/nodebr-white.png"
                  alt="logo da nodebr"
                  width={200}
                  height={300}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  aria-label="logo da nodebr"
                  priority
                />
                <Image
                  src="/company/devpira.png"
                  alt="logo da nodebr"
                  width={200}
                  height={300}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  aria-label="logo da nodebr"
                  priority
                />
              </PartnerArea>
            </div>
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase text-[6.375rem] opacity-10 -rotate-90 absolute right-[81%] top-[400px] font-[700] "
          )}
        >
          Realização
        </span>
      </Container>
    </section>
  );
};

interface PartnerAreaProps extends ImageGridProps {
  text: React.ReactNode;
}

const PartnerArea = ({ text, ...props }: PartnerAreaProps) => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <TypographySubtitle text={text} />
      <ImageGrid {...props} />
    </div>
  );
};

interface ImageGridProps {
  children?: React.ReactNode;
}

function ImageGrid({ children }: ImageGridProps) {
  return (
    <div className="flex flex-col items-center gap-[5rem] md:flex-row flex-wrap">
      {children}
    </div>
  );
}

function RealizationCardsTitleArea({}) {
  return (
    <span className="flex flex-col gap-[1rem]">
      <Title literal>
        <span className="font-bold">Realização</span> e Patrocínio
      </Title>
      <Subtitle
        pre="Organizadores e patrocinadores do"
        bold="Front In Campinas 2024"
      />
    </span>
  );
}
