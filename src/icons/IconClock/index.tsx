import React from "react";

interface IconProps {
  color?: string;
  size?: number;
}

export const IconClock: React.FC<IconProps> = ({
  color = "#404040",
  size = 22,
}) => (
  <svg width={size} height={size} fill="none" color={color}>
    <path
      d="M20.167 11c0 5.06-4.106 9.167-9.166 9.167-5.06 0-9.167-4.107-9.167-9.167s4.107-9.166 9.167-9.166S20.167 5.94 20.167 11Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4 13.915 11.56 12.22c-.495-.293-.899-.999-.899-1.576V6.884"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
