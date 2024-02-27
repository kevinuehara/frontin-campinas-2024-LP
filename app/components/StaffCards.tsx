import staff from "../data/staff.json";
import { AreaHeader, Container, RenderCards } from ".";
import clsx from "clsx";

export const StaffCards = () => {
  return (
    <section className="w-full bg-midnight relative ">
      <Container className="relative md:translate-x-[100px]">
        <div className="flex pt-[20rem] pb-[20rem] ">
          <div className="flex flex-col w-full">
            <AreaHeader
              title="Organização"
              pre="Organizadores do"
              bold="Front In Campinas 2024"
            />
            <RenderCards data={staff} />
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase text-[6.375rem] opacity-10 -rotate-90 absolute right-[77%] bottom-[40%] font-[700] "
          )}
        >
          Organização
        </span>
      </Container>
    </section>
  );
};
