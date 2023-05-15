import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiShopTableV3: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 15 15">
      <path
        d="M12.0364 7.36382C12.0364 9.93534 10.0142 11.9931 7.55235 11.9931C5.09052 11.9931 3.06831 9.93534 3.06831 7.36382C3.06831 4.79231 5.09052 2.73457 7.55235 2.73457C10.0142 2.73457 12.0364 4.79231 12.0364 7.36382Z"
        stroke={color}
        fill="none"
        strokeWidth="1.1"
      />
      <rect
        x="-0.138897"
        y="0.0121471"
        width="4.2958"
        height="0.878171"
        rx="0.439086"
        transform="matrix(0.632026 -0.774947 0.756947 0.653476 1.19006 4.3204)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      />
      <rect
        x="-0.138897"
        y="0.0121471"
        width="4.2958"
        height="0.879272"
        rx="0.439636"
        transform="matrix(0.632026 -0.774947 0.756947 0.653476 10.5868 12.6075)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      />
      <rect
        x="-0.0124921"
        y="0.142842"
        width="4.2958"
        height="0.879272"
        rx="0.439636"
        transform="matrix(-0.632026 -0.774947 0.756947 -0.653476 13.1073 5.09467)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      />
      <rect
        x="-0.0124921"
        y="0.142842"
        width="4.2958"
        height="0.879272"
        rx="0.439636"
        transform="matrix(-0.632026 -0.774947 0.756947 -0.653476 3.71011 13.3808)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      />
    </IconV2>
  );
};
