import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";

interface Talk {
  title: string;
  type:
    | "talk"
    | "keynote"
    | "pitch"
    | "coffee"
    | "opening"
    | "closing"
    | "accreditation"
    | "lunch"
    | "end";
  picture: string;
  speaker: string;
  time: string;
  description?: string;
}

interface ViewType {
  direction: "left" | "right";
}

interface TalkCardProps {
  talk: Talk;
  viewType: ViewType;
}

// função que remove acentos
const removeAccents = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const getSpeakerImage = (speaker: string) => {
  if (speaker === "Rafael Paiva") {
    return "paiva";
  }
  const speakerImageName = removeAccents(speaker.split(" ")[0].toLowerCase());

  return speakerImageName;
};

const getTalkTypeColor = (talkType: Talk["type"]) => {
  switch (talkType.toLowerCase()) {
    case "talk":
      return "#63D7FF";
    case "keynote":
      return "#FFD24A";
    case "pitch":
      return "#FF89C7";
  }
};

/**
 * Se a talk for "coffee" | "opening" | "closing" | "lunch" | "accreditation" ela retorna uma imagem
 */
const getTalkIcon = (talkType: Talk["type"]) => {
  switch (talkType.toLowerCase()) {
    case "coffee":
      return "/icons/coffee.svg";
    case "opening":
      return "/icons/opening.svg";
    case "closing":
      return "/icons/closing.svg";
    case "lunch":
      return "/icons/lunch.svg";
    case "accreditation":
      return "/icons/credential.svg";
    case "end":
      return "/icons/end.svg";
  }
  return null;
};

export const TalkCard: React.FC<TalkCardProps> = ({ talk, viewType }) => {
  return (
    <div
      data-aos="fade-up"
      className={css({
        display: "flex",
        gap: "24px",
        maxWidth: "562px",
        width: "100%",
      })}
    >
      <div>
        <p
          className={css({
            fontSize: "18px",
            fontWeight: "regular",
          })}
        >
          {talk.time}
        </p>
      </div>
      {getTalkIcon(talk.type) ? (
        <div
          className={css({
            flex: "1",
            display: "flex",
            gap: "8px",
          })}
        >
          <img
            src={getTalkIcon(talk.type) || ""}
            alt={`ícone que indica ${talk.title}`}
          />
          <p
            className={css({
              fontSize: "18px",
              fontWeight: "900",
            })}
          >
            {talk.title}
          </p>
        </div>
      ) : (
        <div
          className={css({
            background: "rgba(100, 100, 100, 0.2)",
            borderRadius:
              viewType?.direction === "left"
                ? "0 20px 20px 30px"
                : "20px 0 30px 20px",
            flexDirection:
              viewType?.direction === "left" ? "row-reverse" : "row",
            justifyContent: "space-between",
            minWidth: "100%",
            display: "flex",
            overflow: "hidden",
            "&:hover div:first-child": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 768px)": {
              flexDirection: "column",
              maxWidth: "236px",
            },
          })}
        >
          <div
            className={css({
              backgroundColor: "#111111",
              height: "100%",
              minHeight: "150px",
              minWidth: "158px",
              backgroundImage: `url(/speakers/${
                getSpeakerImage(talk.speaker) + ".jpg"
              })`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              transition: "ease all 1s",

              backgroundRepeat: "no-repeat",
              clipPath:
                viewType?.direction === "left"
                  ? "polygon(6% 10%,0 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 94% 10%, 100% 100%, 0 100%)",
              position: "relative",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                width: "100%",
                height: "100%",
                background: getTalkTypeColor(talk.type),
                clipPath:
                  viewType?.direction === "left"
                    ? "polygon(6% 10%, 0 100%, 0 0)"
                    : "polygon(100% 0, 100% 100%, 94% 10%)",
                left: viewType?.direction === "left" ? "17px" : "-16px",
                transform: "scale(1.2)",
                top: "12px",
              },

              "@media (max-width: 768px)": {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 94%, 0 100%)",
                "&:before": {
                  content: '""',
                  clipPath: "polygon(10% 94%,0 100%, 100% 100%)",
                  top: "-16px",
                  left: "20px",
                },
              },
            })}
          ></div>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "16px",
              flex: "1",
            })}
          >
            <span>
              <p
                className={css({
                  color:
                    talk.type.toLocaleLowerCase() === "keynote"
                      ? "black"
                      : getTalkTypeColor(talk.type) + "!important",
                  background:
                    talk.type.toLocaleLowerCase() === "keynote"
                      ? getTalkTypeColor(talk.type) + "!important"
                      : "transparent",
                  borderRadius: "2px",
                  padding:
                    talk.type.toLocaleLowerCase() === "keynote"
                      ? "2px 4px"
                      : "",
                  display: "inline",
                  alignItems: "center",
                  fontSize: ".75rem",
                  fontWeight: "900",
                })}
              >
                {talk.type.toUpperCase()}
              </p>
            </span>
            <p
              className={css({
                fontSize: "1.125rem",
                fontWeight: "700",
              })}
            >
              <strong>{talk.title}</strong>
            </p>
            <p
              className={css({
                fontSize: "1.125rem",
                color:
                  talk.type.toLowerCase() === "keynote"
                    ? getTalkTypeColor(talk.type)
                    : "white",
              })}
            >
              {talk.speaker.toUpperCase().split(" ")[0] + " "}
              <strong>{talk.speaker.toUpperCase().split(" ")[1]}</strong>
            </p>
            <p
              className={css({
                fontSize: ".75rem",
                fontWeight: "700",
                color:
                  talk.type.toLowerCase() === "keynote"
                    ? getTalkTypeColor(talk.type)
                    : "white",
              })}
            >
              {talk?.description?.toUpperCase()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
