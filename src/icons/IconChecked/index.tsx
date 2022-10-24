import React from "react";

interface IconProps {
  color?: string;
}

export const IconChecked: React.FC<IconProps> = ({ color = "#4318FF" }) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.53 3.47a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 12.94l9.47-9.47a.75.75 0 0 1 1.06 0Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.75A1.25 1.25 0 0 0 3.75 5v14A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25h11a.75.75 0 0 1 0 1.5H5Z"
      fill={color}
    />
  </svg>
);
