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
    <p className="text-[1.77rem] uppercase">
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
  const splitName = name.split(" ");
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
      <HostName
        pre={splitName[0]}
        bold={
          splitName[1] + `${name.includes(" de ") ? " " + splitName[2] : ""}`
        }
      />

      <div className="flex items-center gap-[0.5rem]">
        {socialMedias.linkedin && (
          <a href={socialMedias.linkedin} target="_blank">
            <LinkedinIcon />
          </a>
        )}
        {socialMedias.instagram && (
          <a href={socialMedias.instagram} target="_blank">
            <InstagramIcon />
          </a>
        )}
      </div>
    </div>
  );
};
