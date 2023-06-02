import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "..";

export const IdiTrashV2: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2
      viewBox="0 0 40 40"
      fill="transparent"
      size={size}
      style={style}
      onClick={onClick}
    >
      <path
        d="M14.6832 3.33331L8.6499 9.38331"
        stroke={color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3169 3.33331L31.3502 9.38331"
        stroke={color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3335 13.0833C3.3335 10 4.9835 9.75 7.0335 9.75H32.9668C35.0168 9.75 36.6668 10 36.6668 13.0833C36.6668 16.6667 35.0168 16.4167 32.9668 16.4167H7.0335C4.9835 16.4167 3.3335 16.6667 3.3335 13.0833Z"
        stroke={color}
        strokeWidth="3"
      />
      <path
        d="M16.2666 23.3333V29.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M23.9331 23.3333V29.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5.8335 16.6667L8.1835 31.0667C8.71683 34.3 10.0002 36.6667 14.7668 36.6667H24.8168C30.0002 36.6667 30.7668 34.4 31.3668 31.2667L34.1668 16.6667"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </IconV2>
  );
};
