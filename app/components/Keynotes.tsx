import hosts from "../data/hosts.json";
import { BottomClip, Container } from ".";
import clsx from "clsx";
import { AreaHeader, RenderCards } from "./AreaHeader";

export const Keynotes = () => {
  return (
    <section className="bg-black relative pt-[10rem] pb-[10rem] min-h-[700px]">
      <Container className="relative md:translate-x-[100px]">
        <div className="flex">
          <div className="flex flex-col">
            <AreaHeader title="Keynotes" pre="Em breve" />
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase text-[6rem] opacity-10 -rotate-90 absolute left-[-19rem] top-[11rem] font-[700] "
          )}
        >
          Keynotes
        </span>
      </Container>
      <BottomClip color="black" />
    </section>
  );
};
