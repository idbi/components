import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiArrowDown: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 16 16">
      <path
        d="M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z"
        fill={color}
      />
    </IconV2>
  );
};
