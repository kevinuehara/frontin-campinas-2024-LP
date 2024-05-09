import hosts from "../../data/hosts.json";
import { BottomClip, Container } from "..";
import clsx from "clsx";
import { AreaHeader, RenderCards } from "../AreaHeader/AreaHeader";
import Image from "next/image";
import { InstagramIcon, LinkedinIcon } from "@/app/assets";

export const Keynotes = () => {
  return (
    <section className="bg-black relative pt-[10rem] pb-[10rem] min-h-[700px]">
      <Container className="relative md:translate-x-[100px]">
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 gap-[3rem]">
            <AreaHeader noPaddingBottom title="Keynotes" />
            <LeftKeynote />
            <div className="flex justify-end">
              <RightKeynote />
            </div>
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase text-[6rem] opacity-10 -rotate-90 absolute left-[-23rem] top-[11rem] font-[700] "
          )}
        >
          Keynotes
        </span>
      </Container>
      <BottomClip color="black" />
    </section>
  );
};

const LeftKeynote = () => {
  return (
    <div className="flex gap-[2rem] md:flex-row flex-col">
      <Image
        width="256"
        height={256}
        src="/people/dan.png"
        alt="Foto do Keynote Dan Vitoriano"
        data-aos="fade-up"
      />
      <div>
        <h4 className="uppercase text-[29px]" data-aos="fade-up">
          Dan <span className="font-bold">Vitoriano</span>
        </h4>
        <p className="text-[1.125rem] max-w-[400px]" data-aos="fade-up">
          LinkedIn Top Voice | Idealizador Orgulho Tech | Cofounder Tech 40+ |
          Professor | Criador da Tech Television Brasil
        </p>
        <div
          className="flex mt-[1rem] gap-[0.5rem] items-center"
          data-aos="fade-up"
        >
          <a href="https://www.linkedin.com/in/danvitoriano/" target="_blank">
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/danvitoriano/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const RightKeynote = () => {
  return (
    <div className="flex gap-[2rem] md:flex-row-reverse flex-col">
      <Image
        width="256"
        height={256}
        src="/people/pokemaobr.png"
        alt="Foto do Keynote Pokemão BR"
        data-aos="fade-up"
      />
      <div>
        <h4 className="uppercase text-[29px]" data-aos="fade-up">
          Pokemão <span className="font-bold">BR</span>
        </h4>
        <p className="text-[1.125rem] max-w-[400px]" data-aos="fade-up">
          Ex dev senior | Escritor | Humorista | Palestrante | pokemaobr.dev |
          Streamer
        </p>
        <div
          className="mt-[1rem] flex gap-[0.5rem] items-center"
          data-aos="fade-up"
        >
          <a href="https://www.linkedin.com/in/pokemaobr/" target="_blank">
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/pokemaobr/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
