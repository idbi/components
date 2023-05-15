import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiWarningCircle: React.FC<IIcon> = ({
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
      fill={color}
    >
      <g stroke="none">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
      </g>
    </IconV2>
  );
};
