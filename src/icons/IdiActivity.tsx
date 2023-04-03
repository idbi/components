import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiActivity: React.FC<IIcon> = ({
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
        stroke: color,
      }}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </SvgWrapper>
  );
};
