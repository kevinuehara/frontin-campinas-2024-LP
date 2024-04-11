import { FC } from "react";

export const Title: FC<{
  children: React.ReactNode;
  literal?: boolean;
}> = ({ children, literal }) => {
  if (literal) {
    return (
      <h2
        className="uppercase text-[2.5rem] md:text-[4.5rem] leading-[100%]"
        data-aos="fade-up"
      >
        {children}
      </h2>
    );
  }
  return (
    <h2
      className="uppercase text-[2.5rem] md:text-[4.5rem] leading-[100%] font-[700]"
      data-aos="fade-up"
    >
      {children}
    </h2>
  );
};

export const TypographySubtitle = ({ text }: { text: React.ReactNode }) => {
  return (
    <h3 data-aos="fade-up" className="text-[1.5rem] uppercase">
      {text}
    </h3>
  );
};
