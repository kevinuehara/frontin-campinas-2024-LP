import React, { FC } from "react";

/**
 * Aplica containerização na página
 * @param param0
 * @returns
 */
export const Container: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="max-w-[1280px] m-auto p-0 mt-0">{children}</div>;
};

export default Container;
