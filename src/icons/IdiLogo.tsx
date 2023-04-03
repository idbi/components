import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiLogo: React.FC<IIcon> = ({
  size = 20,
  color,
  onClick,
  style,
}) => {
  return (
    <SvgWrapper
      onClick={onClick}
      size={size}
      style={style}
      svgProps={{
        viewBox: "0 0 356.35 356.37",
      }}
    >
      <path
        fill={color || "#ff82af"}
        d="M211.37,345.22a38.12,38.12,0,0,1-53.87,0L92.61,280.33a38.08,38.08,0,1,1,53.84-53.87l38,38,.16.15,26.78,26.76A38.12,38.12,0,0,1,211.37,345.22Z"
      />
      <path
        fill={color || "#1d2668"}
        d="M356.35,141.57a141.08,141.08,0,0,1-41.44,100.08L211.37,345.22a38.12,38.12,0,0,0,0-53.87l-26.78-26.76-.08-.23,76.58-76.55a65.42,65.42,0,0,0-92.52-92.52L145.86,118l-.41.44A38.08,38.08,0,1,1,91.58,64.58l.44-.43,22.63-22.66a141.58,141.58,0,0,1,241.7,100.08Z"
      />
      <rect
        fill={color || "#ff82af"}
        y="133.87"
        width="76.17"
        height="76.15"
        rx="38.07"
        transform="translate(-110.41 77.25) rotate(-44.99)"
      />
    </SvgWrapper>
  );
};
