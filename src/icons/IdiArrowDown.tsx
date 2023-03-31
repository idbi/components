import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiArrowDown: React.FC<IIcon> = ({
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
        viewBox: "0 0 16 16",
      }}
    >
      <path
        d="M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z"
        fill={color}
      />
    </SvgWrapper>
  );
};
