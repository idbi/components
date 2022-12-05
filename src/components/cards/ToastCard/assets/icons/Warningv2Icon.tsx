import * as React from "react";

interface IconProps {
  color?: string;
}

export const Warningv2Icon: React.FC<IconProps> = ({ color = "#F79E1B" }) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.429a8.571 8.571 0 1 0 0 17.142A8.571 8.571 0 0 0 10 1.43ZM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10-5.714c.395 0 .714.32.714.714v1.429a.714.714 0 0 1-1.428 0V5c0-.394.32-.714.714-.714Zm0 4.285c.395 0 .714.32.714.715V15a.714.714 0 1 1-1.428 0V9.286c0-.395.32-.715.714-.715Z"
      fill={color}
    />
  </svg>
);
