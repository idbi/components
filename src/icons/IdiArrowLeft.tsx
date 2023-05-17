import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiArrowLeft: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 9 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.53033 0.46967C8.82322 0.762563 8.82322 1.23744 8.53033 1.53033L2.06066 8L8.53033 14.4697C8.82322 14.7626 8.82322 15.2374 8.53033 15.5303C8.23744 15.8232 7.76256 15.8232 7.46967 15.5303L0.46967 8.53033C0.176777 8.23744 0.176777 7.76256 0.46967 7.46967L7.46967 0.46967C7.76256 0.176777 8.23744 0.176777 8.53033 0.46967Z"
        fill={color}
      />
    </IconV2>
  );
};
