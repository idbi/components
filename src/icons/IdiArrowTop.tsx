import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiArrowTop: React.FC<IIcon> = ({
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
        d="M0.21967 8.28033C0.512563 8.57322 0.987437 8.57322 1.28033 8.28033L7.75 1.81066L14.2197 8.28033C14.5126 8.57322 14.9874 8.57322 15.2803 8.28033C15.5732 7.98744 15.5732 7.51256 15.2803 7.21967L8.28033 0.21967C7.98744 -0.0732231 7.51256 -0.0732231 7.21967 0.21967L0.21967 7.21967C-0.0732233 7.51256 -0.0732233 7.98744 0.21967 8.28033Z"
        fill={color}
      />
    </IconV2>
  );
};
