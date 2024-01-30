"use client";
import Image from "next/image";
import { Button, Container } from ".";
import { DateIcon, LocationIcon } from "../assets";

/**
 * Header da página Home
 */
export const Header = () => {
  return (
    <div className="bg-gradient-to-r bg-black pt-[2.65rem]">
      <Container className="relative">
        <Image
          className="blur-lg opacity-90 absolute left-0 top-0 animate-[spin_15s_infinite_alternate] select-none	z-0"
          src="/logo_transparent.png"
          alt="FrontIn Campinas Logo"
          width={1400}
          height={1400}
          priority
        />
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
        <section className="h-screen z-2">
          <div className="flex flex-col items-center justify-center h-[80%]">
            <div data-aos="fade-up" className="p-4 md:p-0">
              <Image
                src="/frontin-home.svg"
                alt="FrontIn Campinas Logo"
                width={600}
                height={600}
                priority
              />
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-medium text-lg mt-14 text-center z-2"
            >
              Em breve Call For Papers
            </h1>
            <Button
              data-aos-delay="400"
              data-aos="fade-up"
              className="mt-6 z-2"
            />
          </div>
        </section>
      </Container>
    </div>
  );
};
