import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx, { ClassValue } from "clsx";
import { css } from "@emotion/css";

const active = "text-white border-b-white border-b-[2px]";
const base: ClassValue = "font-medium pb-[0.5rem] transition-all";

export const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="max-w-[1096px] m-auto mb-[2rem] justify-end md:flex-row flex-col p-[2rem] flex gap-[3rem]">
      <Link
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
