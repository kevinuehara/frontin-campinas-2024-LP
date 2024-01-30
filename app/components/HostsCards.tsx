import { Card } from "./Card";
import hosts from "../data/hosts.json";
import { Person } from "../types";
import { BottomClip, Container, Title } from ".";
import clsx from "clsx";

export interface IAreaHeaderProps extends ISubtitleProps {
  title: string;
}

export const AreaHeader = ({ title, ...props }: IAreaHeaderProps) => (
  <span className="flex flex-col gap-[1rem] pb-[4.5rem]">
    <Title>{title}</Title>
    <Subtitle {...props} />
  </span>
);

export interface ISubtitleProps {
  pre: string;
  bold: string;
}
export const Subtitle = ({ pre, bold }: ISubtitleProps) => {
  return (
    <h3 data-aos="fade-up" className="text-[1.25rem] uppercase">
      {pre} <span className="font-bold">{bold}</span>
    </h3>
  );
};

export const RenderCards = ({ data: hosts }: { data: Person[] }) => (
  <div className="flex flex-col md:flex-row gap-[3rem]">
    {hosts.map((host: Person, i) => (
      <Card
        data-aos="fade-up"
        data-aos-delay={((i + 1) * 100).toString()}
        key={host.name}
        description={host.description}
        name={host.name}
        socialMedias={host.socialMedias}
        pathMedia={host.pathMedia}
      />
    ))}
  </div>
);

export const HostsCards = () => {
  return (
    <section className="bg-black relative pt-[10rem] pb-[10rem]">
      <BottomClip color="black" />
      <Container className="relative">
        <div className="flex">
          <div className="flex flex-col">
            <AreaHeader
              title="Hosts"
              pre="Apresentadores do"
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
    </section>
  );
};
