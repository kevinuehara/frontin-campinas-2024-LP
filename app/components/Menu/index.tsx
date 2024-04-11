import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx, { ClassValue } from "clsx";
import { css } from "@emotion/css";
import { Global } from "@emotion/react";
import { useRouter } from "next/navigation";

const active = "text-white border-b-white border-b-[2px]";
const base: ClassValue = "font-medium pb-[0.5rem] transition-all";

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (path: string) => (e: any) => {
    debugger;
    const currentPathName = pathname;
    const allElementsWithClass = document.querySelectorAll(".fadeInLeft");
    const allElementsWithClassRight = document.querySelectorAll(".fadeInRight");
    console.log("🚀 ~ useEffect ~ allElementsWithClass:", allElementsWithClass);

    const mapElements = (element: Element) => {
      if (path === currentPathName) {
        return;
      }
      // se o pathname for diferente de /, adiciona a classe fadeOut (right)
      if (currentPathName !== "/") {
        element.classList.add("fadeOutRight");
        setTimeout(() => {
          router.push(path);
        }, 80);
      } else {
        element.classList.add("fadeOutLeft");
        setTimeout(() => {
          router.push(path);
        }, 80);
        // se o pathname for igual a /, adiciona a classe fadeOut (left)
        element.classList.add("fadeOutLeft");
      }
    };

    // adiciona a classe fadeOut a todos os elementos com a classe fadeOut
    allElementsWithClass.forEach(mapElements);
    allElementsWithClassRight.forEach(mapElements);

    e.preventDefault();
  };

  return (
    <div className="max-w-[1096px] m-auto mb-[2rem] justify-end md:flex-row flex-col p-[2rem] flex gap-[3rem]">
      <Link
        onClick={handleClick("/")}
        className={clsx(
          {
            [active]: pathname === "/",
          },
          base,
          css(`
          
          @keyframes fadeIn {
            0% {
              border-bottom-width: 0;
            }
            50% {
              border-bottom-width: 5px;
            }
            100% {
              border-bottom-width: 2px;
            }
          }

          animation: fadeIn 0.5s;
          `)
        )}
        href="/"
      >
        Front in Campinas 2024
      </Link>
      <Link
        onClick={handleClick("/call-for-papers")}
        className={clsx(
          {
            [active]: pathname !== "/",
          },
          base,
          "flex gap-[.625rem] items-end"
        )}
        href="/call-for-papers"
      >
        <span>Call 4 Papers</span>
        <span className="animate-pulse uppercase text-[0.75rem] text-yellow font-bold">
          Aberto!
        </span>
      </Link>
    </div>
  );
};

export default Menu;
