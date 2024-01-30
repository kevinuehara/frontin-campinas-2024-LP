import { colors } from "@/app/assets/colors";
import { css } from "@emotion/css";
import clsx from "clsx";
import React from "react";
import { BottomClip, Container, TopClip } from "..";

export const Sponsor = () => {
  return (
    <div
      className={clsx(
        "pt-4 pb-20 relative",
        css({
          backgroundColor: colors.darkGray,
        })
      )}
    >
      <TopClip />
      {/* <BottomClip /> */}
      <Container className="text-right">
        <p data-aos="fade-up" className="font-extrabold uppercase text-2xl">
          Quer patrocinar o evento?
        </p>
        <p className="uppercase" data-aos="fade-up">
          Acesse{" "}
          <a
            href="https://forms.gle/XvA4EGeY3U6zW5Bk8"
            target="_blank"
            className="text-white font-extrabold underline"
          >
            este formulário
          </a>
          , veja nosso midiakit <br /> e confira as vantagens!
        </p>
      </Container>
    </div>
  );
};

export default Sponsor;
