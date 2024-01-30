import hosts from "../data/hosts.json";
import { BottomClip, Container } from ".";
import clsx from "clsx";
import { AreaHeader, RenderCards } from "./AreaHeader";

export const HostsCards = () => {
  return (
    <section className="bg-black relative pt-[10rem] pb-[10rem]">
      <Container className="relative md:translate-x-[100px]">
        <div className="flex">
          <div className="flex flex-col">
            <AreaHeader
              title="Hosts"
              pre="Apresentador do"
              bold="Front In Campinas 2024"
            />
            <RenderCards data={hosts} />
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase text-[10rem] opacity-10 -rotate-90 absolute right-[86%] bottom-[27%] font-[700] "
          )}
        >
          Hosts
        </span>
      </Container>
      <BottomClip color="black" />
    </section>
  );
};
