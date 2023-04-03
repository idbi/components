import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiKeyboardBackSpace: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <SvgWrapper
      onClick={onClick}
      size={size}
      style={style}
      svgProps={{
        viewBox: "0 0 24 24",
      }}
    >
      <path
        fill={color}
        d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
      />
    </SvgWrapper>
  );
};
