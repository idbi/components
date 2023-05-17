import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiProfile: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 115 110">
      <path
        d="M55 108.333c29.456 0 53.334-23.879 53.334-53.334 0-29.455-23.879-53.333-53.334-53.333-29.455 0-53.333 23.878-53.333 53.333S25.545 108.333 55 108.333Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M55.64 59.16a5.138 5.138 0 0 0-1.28 0c-9.386-.32-16.853-8-16.853-17.44 0-9.653 7.787-17.493 17.493-17.493 9.653 0 17.493 7.84 17.493 17.493-.053 9.44-7.466 17.12-16.853 17.44ZM90.947 94.36c-9.493 8.694-22.08 13.974-35.947 13.974-13.866 0-26.453-5.28-35.946-13.974.533-5.013 3.733-9.92 9.44-13.76 14.613-9.706 38.506-9.706 53.013 0 5.707 3.84 8.907 8.747 9.44 13.76Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconV2>
  );
};
