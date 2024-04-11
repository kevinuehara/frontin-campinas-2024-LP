"use client";
import Image from "next/image";
import { Button, Container } from "..";
import { DateIcon, LocationIcon } from "../../assets";
import { css } from "@emotion/css";
import clsx from "clsx";

export const backgroundHeader = clsx(
  "bg-gradient-to-r bg-black pt-[2.65rem]",
  css({
    "@keyframes rotateBgHeader": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
    position: "relative",
    backdropFilter: "blur(6.6px)",

    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundImage: "url(/logo_transparent.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "auto 100%",
      animation: "rotateBgHeader 15s linear infinite",
      filter: "blur(20px)",
      zIndex: "-1",
    },
  })
);

/**
 * Header da página Home
 */
export const Header = () => {
  return (
    <div className={backgroundHeader}>
      <Container className="relative">
        <section className="md:h-screen z-2">
          <div className="flex flex-col items-center justify-center md:h-[80%] min-h-[700px] pb-[10rem]">
            <div className="flex md:flex-row flex-col md:gap-[41px]">
              <div>
                <Image
                  src="/static/logo-color.png"
                  alt="FrontIn Campinas Logo"
                  width={217}
                  height={600}
                  className="md:top-[-57px] top-[-25px] relative"
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
                    priority
                  />
                </div>
                <div className="flex flex-col gap-[1rem] z-4">
                  <div className="flex align-items-center justify-items-center gap-[1rem] z-4">
                    <DateIcon />
                    <label className="text-2xl font-extrabold z-4">
                      25 de Maio de 2024
                    </label>
                  </div>
                  {/* <div> */}
                  <a
                    href="#local"
                    className="cursor-pointer flex align-items-center justify-items-center gap-[1rem] z-4"
                  >
                    <LocationIcon />
                    <label className="text-[1.5rem] cursor-pointer font-medium z-4 underline">
                      Pólis de Alta Tecnologia
                    </label>
                  </a>
                  {/* </div> */}
                </div>

                <div>
                  <Button
                    // data-aos-delay="400"
                    // data-aos="fade-up"
                    className="mt-6 z-99"
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
