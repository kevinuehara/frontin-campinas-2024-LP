import { BottomClip, Container, TopClip } from ".";
import clsx from "clsx";
import { AreaHeader } from "./AreaHeader";

export const Schedule = () => {
  return (
    <section className="bg-black relative pt-[10rem] pb-[10rem] min-h-[900px]">
      <Container className="relative md:translate-x-[100px]">
        <div className="flex">
          <div className="flex flex-col">
            <AreaHeader title="Programação" pre="Em breve" />
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase nowrap text-[102px] opacity-10 -rotate-90 absolute right-[86%] top-[11rem] font-[700] whitespace-nowrap "
          )}
        >
          Em breve
        </span>
      </Container>
      <TopClip color="black" />
    </section>
  );
};
