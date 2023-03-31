import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiPoint: React.FC<IIcon> = ({
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
        viewBox: "0 0 8 8",
      }}
    >
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="4"
        cy="4"
        r="4"
        fill={color}
      />
    </SvgWrapper>
  );
};
