import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiShopTable: React.FC<IIcon> = ({
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
        viewBox: "0 0 108 101",
      }}
    >
      <circle
        cx="53.9666"
        cy="50.9988"
        r="43.072"
        strokeWidth="1.5"
        fill={color}
      />
      <rect
        x="2.76964"
        y="25.2681"
        width="34.2346"
        height="6.58186"
        rx="2.25"
        transform="rotate(-45 2.76964 25.2681)"
        strokeWidth="1.5"
        fill={color}
      />
      <rect
        x="77.5685"
        y="95.0493"
        width="34.2346"
        height="6.58186"
        rx="2.25"
        transform="rotate(-45 77.5685 95.0493)"
        strokeWidth="1.5"
        fill={color}
      />
      <rect
        x="100.512"
        y="30.8417"
        width="34.2346"
        height="6.58186"
        rx="2.25"
        transform="rotate(-135 100.512 30.8417)"
        strokeWidth="1.5"
        fill={color}
      />
      <rect
        x="25.3936"
        y="99.7089"
        width="34.2346"
        height="6.58186"
        rx="2.25"
        transform="rotate(-135 25.3936 99.7089)"
        strokeWidth="1.5"
        fill={color}
      />
    </SvgWrapper>
  );
};
