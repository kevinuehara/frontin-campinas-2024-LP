import Link from "next/link";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx, { ClassValue } from "clsx";
import { useRouter } from "next/navigation";
import { css } from "@emotion/css";

const base: ClassValue =
  "font-medium pb-[0.5rem] transition-all cursor-pointer";

const getElementPositionAndWidth = (
  elId: string
): {
  position: number;
  width: number;
} => {
  const currentElement = document.querySelector("#" + elId);
  if (!currentElement) {
    return {
      position: 0,
      width: 0,
    };
  }
  const position = (currentElement as HTMLLinkElement).offsetLeft;
  const width = (currentElement as HTMLLinkElement).offsetWidth;
  return {
    position,
    width,
  };
};

type Position = ReturnType<typeof getElementPositionAndWidth>;

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const elementId = pathname === "/" ? "linkHome" : "linkCallForPapers";

  const handleClick =
    (path: string): MouseEventHandler<HTMLAnchorElement> =>
    (e) => {
      const currentPathName = pathname;
      const allElementsWithClass = document.querySelectorAll(".fadeInLeft");
      const allElementsWithClassRight =
        document.querySelectorAll(".fadeInRight");

      const mapElements = (element: Element) => {
        if (path === currentPathName) {
          return;
        }

        // se o pathname for diferente de /, adiciona a classe fadeOut (right)
        if (currentPathName !== "/") {
          element.classList.add("fadeOutRight");
        } else {
          // se o pathname for igual a /, adiciona a classe fadeOut (left)
          element.classList.add("fadeOutLeft");
        }

        setTimeout(() => {
          router.push(path);
        }, 80);
      };

      // adiciona a classe fadeOut a todos os elementos com a classe fadeOut
      allElementsWithClass.forEach(mapElements);
      allElementsWithClassRight.forEach(mapElements);

      e.preventDefault();
    };

  const [positionAndWidth, setPositionAndWidth] = useState({} as Position);
  const [tempPositionAndWidth, setTempPositionAndWidth] = useState(
    {} as Position
  );

  const { position, width } = positionAndWidth;
  const { position: tempPosition, width: tempWidth } = tempPositionAndWidth;

  const loadPositions = () => {
    setPositionAndWidth(getElementPositionAndWidth(elementId));
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      loadPositions();
    });

    loadPositions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHover = (elementId: string) => {
    setTempPositionAndWidth(getElementPositionAndWidth(elementId));
  };

  const handleLeave = () => {
    setTempPositionAndWidth({
      position: 0,
      width: 0,
    });
  };

  return (
    <div
      className={clsx(
        "relative max-w-[1096px] m-auto mb-[2rem] justify-end md:flex-row flex-col p-[2rem] flex gap-[3rem]"
      )}
    >
      <Link
        id="linkHome"
        onMouseOver={() => handleHover("linkHome")}
        onMouseLeave={handleLeave}
        onClick={handleClick("/")}
        className={clsx(base)}
        href="/"
      >
        Front in Campinas 2024
      </Link>
      <Link
        id="linkCallForPapers"
        onMouseOver={() => handleHover("linkCallForPapers")}
        onMouseLeave={handleLeave}
        onClick={handleClick("/call-for-papers")}
        className={clsx(base, "flex gap-[.625rem] items-end")}
        href="/call-for-papers"
      >
        <span>Call 4 Papers</span>
        <span className="animate-pulse uppercase text-[0.75rem] text-yellow font-bold">
          Aberto!
        </span>
      </Link>

      <div
        className={clsx(
          css({
            height: "2px",
            backgroundColor: "white",
            width: tempWidth || width,
            top: 64,
            left: tempPosition || position,
            position: "absolute",
            transition: "all ease 0.2s",
          }),
          "md:block hidden"
        )}
      ></div>
    </div>
  );
};

export default Menu;
