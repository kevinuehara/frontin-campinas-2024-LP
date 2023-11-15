import { Person } from "@/app/types";
import Image from "next/image";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineInsertLink } from "react-icons/md";

interface CardProps extends Person {
  className?: string;
}

export const Card = ({
  description,
  name,
  socialMedias,
  pathMedia,
  className,
}: CardProps) => {
  return (
    <div
      className={`flex border-2 border-b-4 border-black w-full md:w-2/5 ${className}`}
    >
      <Image
        className="border-2 border-white"
        src={pathMedia ?? ""}
        alt={name}
        width={200}
        height={200}
        aria-label={`Foto do host e palestrante ${name}`}
        priority
      />
      <div className="flex flex-col ml-2 h-full">
        <h1 className="font-bold text-4xl">{name}</h1>
        <p className="text-xl">{description}</p>

        <div className="flex mt-10">
          {socialMedias.linkedin && <FaLinkedin className="h-8 w-8" />}
          {socialMedias.twitter && <FaSquareXTwitter className="h-8 w-8" />}
          {socialMedias.instagram && <FaSquareInstagram className="h-8 w-8" />}
          {socialMedias.linktree && <MdOutlineInsertLink className="h-8 w-8" />}
        </div>
      </div>
    </div>
  );
};
