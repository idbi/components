import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiMinus: React.FC<IIcon> = ({
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
        viewBox: "0 0 15 2",
      }}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M1.88086 1H13.8809"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgWrapper>
  );
};
