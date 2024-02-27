import { colors } from "@/app/assets/colors";
import { css } from "@emotion/css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <>
      <a
        aria-disabled="true"
        href="https://forms.gle/NN1TV5MdX99LdEHS8"
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
        Acessar Call4Papers
      </a>
    </>
  );
};
