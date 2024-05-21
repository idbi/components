import React from "react";
import { IconV2 } from "../IconV2";
import { IIconV2 } from "../IconV2/types";

export const CheckCircleIcon = ({ strokeWidth = 1.5, ...props }: IIconV2) => {
  return (
    <IconV2 viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M7.99998 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00004C14.6666 4.33337 11.6666 1.33337 7.99998 1.33337C4.33331 1.33337 1.33331 4.33337 1.33331 8.00004C1.33331 11.6667 4.33331 14.6667 7.99998 14.6667Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16669 7.99995L7.05335 9.88661L10.8334 6.11328"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconV2>
  );
};
