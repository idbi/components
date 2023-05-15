import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiActivity: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2
      onClick={onClick}
      size={size}
      style={style}
      viewBox="0 0 24 24"
      stroke={color}
      fill="transparent"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </IconV2>
  );
};
