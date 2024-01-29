"use client";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Container } from ".";
import { DateIcon, LocationIcon } from "../assets";
import { css } from "@emotion/css";

/**
 * Header da página Home
 */
export const Header = () => {
  return (
    <div className="bg-gradient-to-r bg-black pt-[2.65rem]">
      <Container>
        <div className=" flex flex-col items-center content-center gap-[1rem]">
          <div className="flex align-items-center justify-items-center gap-[1rem]">
            <DateIcon />
            <label className="text-lg font-medium">Mai/2024</label>
          </div>
          <div className="flex align-items-center justify-items-center gap-[1rem]">
            <LocationIcon />
            <label className="text-lg font-medium ">
              Pólis de Alta Tecnologia
            </label>
          </div>
        </div>
        <section className="h-screen">
          <div className="flex flex-col items-center justify-center h-[80%]">
            <div className="p-4 md:p-0">
              <Image
                src="/frontin-home.svg"
                alt="FrontIn Campinas Logo"
                width={600}
                height={600}
                priority
              />
            </div>
            <h1 className="font-medium text-lg mt-14 text-center">
              Em breve Call For Papers
            </h1>
            <Button className="mt-6" />
          </div>

          <div className="top-[380px] -left-36 absolute rotate-45">
            <Image
              className="w-96 opacity-10"
              src="/transparent-logo.svg"
              alt="FrontIn Campinas Logo"
              width={600}
              height={600}
              priority
            />
          </div>
          <div>
            <div
              className="bg-midnight"
              style={{
                position: "absolute",
                bottom: -95,
                width: "100vw",
                height: "500px",
                WebkitClipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
                clipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
              }}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};
