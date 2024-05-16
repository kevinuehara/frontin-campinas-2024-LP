import { BottomClip, Container, TopClip } from "..";
import clsx from "clsx";
import { AreaHeader } from "../AreaHeader/AreaHeader";
import Talks from "./data/talks.json";
import { TalkCard } from "./components";
import { css } from "@emotion/css";

const verifyDirection = (talkTitulo: string) => {
  const talksOnlyKeynotePitchTalk = Talks.filter((talk) =>
    ["keynote", "pitch", "talk"].includes(talk.tipo.toLowerCase())
  );

  const index = talksOnlyKeynotePitchTalk.findIndex(
    (talk) => talk.titulo === talkTitulo
  );
  return !(index % 2 === 0);
};

export const Schedule = () => {
  return (
    <section className="bg-black relative pt-[10rem] pb-[10rem] min-h-[900px]">
      <Container className="relative md:translate-x-[100px]">
        <div className="flex">
          <div className="flex flex-col">
            <AreaHeader title="Programação" pre="" />
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              })}
            >
              {Talks.map((talk, i) => (
                <TalkCard
                  viewType={{
                    direction: verifyDirection(talk.titulo) ? "right" : "left",
                  }}
                  key={talk.titulo}
                  talk={{
                    time: talk.hora,
                    type: talk.tipo as "talk" | "keynote" | "pitch",
                    title: talk.titulo,
                    speaker: talk.palestrante ?? "",
                    picture: "",
                    description: talk.descricao ?? "",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <span
          className={clsx(
            "inline-block uppercase nowrap text-[102px] opacity-10 -rotate-90 absolute right-[86%] top-[11rem] font-[700] whitespace-nowrap "
          )}
        >
          Em breve
        </span>
      </Container>
      <TopClip color="black" />
    </section>
  );
};
