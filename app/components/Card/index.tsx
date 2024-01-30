import { Person } from "@/app/types";
import Image from "next/image";
import React from "react";
import { InstagramIcon, LinkedinIcon } from "@/app/assets";

interface CardProps extends Person {
  className?: string;
  title?: string;
}

const HostName = ({ pre, bold }: { pre: string; bold: string }) => {
  return (
    <p className="text-[1.8125rem] uppercase">
      {pre} <span className="font-bold">{bold}</span>
    </p>
  );
};

export const Card = ({
  name,
  socialMedias,
  pathMedia,
  className,
  ...props
}: CardProps) => {
  return (
    <div className={`flex flex-col gap-[0.375rem] ${className}`} {...props}>
      <Image
        src={pathMedia ?? ""}
        alt={name}
        width={297}
        height={256}
        aria-label={`Foto do host e palestrante ${name}`}
        priority
      />
      <HostName pre={name.split(" ")[0]} bold={name.split(" ")[1]} />

      <div className="flex items-center gap-[0.5rem]">
        {socialMedias.linkedin && (
          <a href={socialMedias.linkedin} target="_blank">
            <InstagramIcon />
          </a>
        )}
        {socialMedias.instagram && (
          <a href={socialMedias.instagram} target="_blank">
            <LinkedinIcon />
          </a>
        )}
      </div>
    </div>
  );
};
