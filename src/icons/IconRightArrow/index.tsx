import * as React from "react";

interface IconProps {
  color?: string;
}

export const IconRightArrow: React.FC<IconProps> = ({ color = "#242954" }) => (
  <svg width={14} height={17} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.417 6.46 11.958 10l-3.54 3.54"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.86 10H2.041L2 6V1.5"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
