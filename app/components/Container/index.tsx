import clsx from "clsx";
import React, { FC } from "react";

/**
 * Aplica containerização na página
 * @param param0
 * @returns
 */
export const Container: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx("max-w-[1280px] m-auto p-0 mt-0", className)}>
      {children}
    </div>
  );
};

export default Container;
