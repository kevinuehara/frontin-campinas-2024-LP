import { colors } from "@/app/assets/colors";
import { css } from "@emotion/css";
import clsx from "clsx";
import { FaInstagram } from "react-icons/fa";
import { Container } from "..";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer
      className={clsx(
        "py-[1.5rem]",
        css({
          backgroundColor: colors.black,
        })
      )}
    >
      <Container className="flex md:flex-row flex-col gap-[1rem] md:items-center font-medium md:justify-between">
        <Image
          src="/frontin-home.svg"
          alt="FrontIn Campinas Logo"
          width={161}
          height={600}
          priority
        />
        <a
          className="hover:underline"
          href="mailto:frontincampinas.event@gmail.com"
        >
          frontincampinas.event@gmail.com
        </a>
        <a
          className="flex items-center gap-[0.5rem] hover:underline"
          href="https://www.instagram.com/frontin_campinas/"
          target="_blank"
        >
          <FaInstagram />
          frontin_campinas
        </a>
      </Container>
    </footer>
  );
};
