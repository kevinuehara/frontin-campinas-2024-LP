"use client";
import Image from "next/image";
import { Button, Container } from ".";
import { DateIcon, LocationIcon } from "../assets";
import { css } from "@emotion/css";

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

        <section className="h-screen z-2">
          <div className="flex flex-col items-center justify-center h-[80%]">
            <div className="flex gap-[41px]">
              <div>
                <Image
                  src="/static/logo-color.png"
                  alt="FrontIn Campinas Logo"
                  width={217}
                  height={600}
                  className="top-[-57px] relative"
                  priority
                />
              </div>
              <div className="flex flex-col gap-[2.2rem]">
                <div data-aos="fade-up" className="p-4 md:p-0">
                  <Image
                    src="/static/logo-base.png"
                    alt="FrontIn Campinas Logo"
                    width={386}
                    height={600}
                    className={css({})}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-[1rem]">
                  <div className="flex align-items-center justify-items-center gap-[1rem]">
                    <DateIcon />
                    <label className="text-2xl font-extrabold">
                      25 de Maio de 2024
                    </label>
                  </div>
                  <div className="flex align-items-center justify-items-center gap-[1rem]">
                    <LocationIcon />
                    <label className="text-lg font-medium ">
                      Pólis de Alta Tecnologia
                    </label>
                  </div>
                </div>

                <div>
                  <Button
                    data-aos-delay="400"
                    data-aos="fade-up"
                    className="mt-6 z-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};
