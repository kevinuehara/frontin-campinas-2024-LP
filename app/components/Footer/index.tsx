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
        "",
        css({
          backgroundColor: colors.black,
        })
      )}
    >
      <Container className="flex flex-row-reverse justify-between pt-5 pb-5">
        <div className="flex flex-col">
          <h5 className="text-lg font-bold uppercase">Contato</h5>
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
            Conheça nosso instagram
          </a>
        </div>
        <p className="uppercase font-bold">
          <Image
            src="/frontin-home.svg"
            alt="FrontIn Campinas Logo"
            width={200}
            height={600}
            priority
          />
        </p>
      </Container>
    </footer>
  );
};
