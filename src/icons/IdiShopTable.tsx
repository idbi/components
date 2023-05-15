import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiShopTable: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  colorStroke = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 108 101">
      <circle
        cx="53.9666"
        cy="50.9988"
        r="43.072"
        strokeWidth="1.5"
        fill={color}
        stroke={colorStroke}
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
        stroke={colorStroke}
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
        stroke={colorStroke}
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
        stroke={colorStroke}
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
        stroke={colorStroke}
      />
    </IconV2>
  );
};
