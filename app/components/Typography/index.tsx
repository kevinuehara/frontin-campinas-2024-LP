import { FC } from "react";

export const Title: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <h2
      className="uppercase text-[4.5rem] leading-[100%] font-[700]"
      data-aos="fade-up"
    >
      {children}
    </h2>
  );
};
