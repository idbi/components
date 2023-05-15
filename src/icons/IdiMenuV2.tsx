import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiMenuV2: React.FC<IIcon> = ({
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
      viewBox="0 0 13 13"
      fill="transparent"
    >
      <path
        d="M1 1.84615C1 1.37884 1.37884 1 1.84615 1H11.1538C11.6212 1 12 1.37884 12 1.84615V2.26923C12 2.73655 11.6212 3.11538 11.1538 3.11538H1.84615C1.37884 3.11538 1 2.73655 1 2.26923V1.84615Z"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M1 5.65385C1 5.18653 1.37884 4.80769 1.84615 4.80769H11.1538C11.6212 4.80769 12 5.18653 12 5.65385V7.34615C12 7.81347 11.6212 8.19231 11.1538 8.19231H1.84615C1.37884 8.19231 1 7.81347 1 7.34615V5.65385Z"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M1 10.7308C1 10.2635 1.37884 9.88462 1.84615 9.88462H11.1538C11.6212 9.88462 12 10.2635 12 10.7308V11.1538C12 11.6212 11.6212 12 11.1538 12H1.84615C1.37884 12 1 11.6212 1 11.1538V10.7308Z"
        stroke={color}
        strokeLinecap="round"
      />
    </IconV2>
  );
};
