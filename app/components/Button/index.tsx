import { colors } from "@/app/assets/colors";
import { css } from "@emotion/css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  href?: string;
  variant?: "primary" | "secondary";
  text?: string;
  disabled?: boolean;
}

export const Button = ({
  className,
  href = "https://forms.gle/NN1TV5MdX99LdEHS8",
  variant,
  text = "Acessar Call4Papers",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <>
      <a
        aria-disabled={disabled}
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
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
          })
        )}
        {...props}
        href={!disabled ? href : undefined}
      >
        {text}
      </a>
    </>
  );
};
