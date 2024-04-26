import { Card } from "../Card";
import { Person } from "../../types";
import { Title } from "..";
import clsx from "clsx";

export interface IAreaHeaderProps extends ISubtitleProps {
  title: string;
  noPaddingBottom?: boolean;
}

export const AreaHeader = ({ title, ...props }: IAreaHeaderProps) => (
  <span
    className={clsx("flex flex-col gap-[1rem] pb-[4.5rem]", {
      "pb-0": props.noPaddingBottom,
    })}
  >
    <Title>{title}</Title>
    {props.pre && <Subtitle {...props} />}
  </span>
);

export interface ISubtitleProps {
  pre?: string;
  bold?: string;
}
export const Subtitle = ({ pre, bold }: ISubtitleProps) => {
  return (
    <h3 data-aos="fade-up" className="text-[1.25rem] uppercase">
      {pre} {bold && <span className="font-bold">{bold}</span>}
    </h3>
  );
};

export const RenderCards = ({ data: hosts }: { data: Person[] }) => (
  <div className="flex flex-col md:flex-row gap-[3rem] lg:flex-wrap 2xl:flex-nowrap ">
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
