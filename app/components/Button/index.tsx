import { colors } from "@/app/assets/colors";
import { css } from "@emotion/css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  href?: string;
  variant?: "primary" | "secondary";
  text?: string;
}

export const Button = ({
  className,
  href = "https://forms.gle/NN1TV5MdX99LdEHS8",
  variant,
  text = "Acessar Call4Papers",
  ...props
}: ButtonProps) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className={clsx(
          `font-semibold rounded text-lg p-[1rem] ${className} font-bold`,
          css({
            color: colors.black,
            backgroundColor:
              variant === "primary"
                ? colors.buttonPrimary
                : colors.buttonSecondary,
            transition: "filter 0.2s",
            "&:hover": {
              filter: "brightness(0.9)",
            },
          })
        )}
        {...props}
      >
        {text}
      </a>
    </>
  );
};
