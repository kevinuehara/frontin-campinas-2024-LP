import { css } from "@emotion/css";
import { colors } from "../../assets/colors";

export const TopClip = ({
  color = "darkGray",
}: {
  color?: keyof typeof colors;
}) => (
  <span
    className={css({
      position: "absolute",
      background: colors[color],
      bottom: "100%",
      width: "100%",
      height: "500px",
      WebkitClipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
      clipPath: "polygon(100% 65%, 0% 100%, 100% 100%)",
    })}
  />
);

export const BottomClip = ({
  color = "darkGray",
}: {
  color?: keyof typeof colors;
}) => (
  <span
    className={css({
      position: "absolute",
      background: colors[color],
      top: "100%",
      zIndex: 20,
      width: "100%",
      height: "40rem",
      WebkitClipPath: "polygon(100% 0, 0 0, 100% 20%)",
      clipPath: "polygon(100% 0, 0 0, 100% 20%)",
    })}
  />
);
