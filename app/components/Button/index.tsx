import { colors } from "@/app/assets/colors";
import { css } from "@emotion/css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <>
      {/* <a
        aria-disabled="true"
        href="#"
        target="_blank"
        className={clsx(
          `font-semibold rounded text-lg p-[0.94rem] ${className}`,
          css({
            backgroundColor: colors.primary,
            transition: "filter 0.2s",
            "&:hover": {
              filter: "brightness(0.9)",
            },
          })
        )}
        {...props}
      >
        Se inscreva pelo Call4Papers
      </a> */}
      <p className="p-[0.94rem] mt-5">Em breve Call4Papers...</p>
    </>
  );
};
