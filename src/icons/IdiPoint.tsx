import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiPoint: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 8 8">
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="4"
        cy="4"
        r="4"
        fill={color}
      />
    </IconV2>
  );
};
