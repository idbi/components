import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiArrowBottom: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 16 9">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L7.75 6.68934L14.2197 0.21967C14.5126 -0.0732233 14.9874 -0.0732233 15.2803 0.21967C15.5732 0.512563 15.5732 0.987437 15.2803 1.28033L8.28033 8.28033C7.98744 8.57322 7.51256 8.57322 7.21967 8.28033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z"
        fill={color}
      />
    </IconV2>
  );
};
