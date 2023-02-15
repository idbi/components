import React from "react";
import { IIconV2 } from "../IconV2/types";
import { IconV2 } from "../IconV2";

export const MarkerIcon = (props: IIconV2 & { borderColor?: string }) => {
  return (
    <IconV2 viewBox="0 0 24 30" color="#4318FF" fill="none" {...props}>
      <path
        d="M16.4 11.7692C16.4 14.1483 14.4301 16.0769 12 16.0769C9.56995 16.0769 7.6 14.1483 7.6 11.7692C7.6 9.39016 9.56995 7.46154 12 7.46154C14.4301 7.46154 16.4 9.39016 16.4 11.7692Z"
        fill="currentColor"
      />
      <path
        d="M23 11.4379C23 20.5162 12 29 12 29C12 29 1 20.5162 1 11.4379C1 5.67319 5.92487 1 12 1C18.0751 1 23 5.67319 23 11.4379Z"
        fill="currentColor"
      />
      <path
        d="M16.4 11.7692C16.4 14.1483 14.4301 16.0769 12 16.0769C9.56995 16.0769 7.6 14.1483 7.6 11.7692C7.6 9.39016 9.56995 7.46154 12 7.46154C14.4301 7.46154 16.4 9.39016 16.4 11.7692Z"
        stroke={props.borderColor || "#F5F5F5"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 11.4379C23 20.5162 12 29 12 29C12 29 1 20.5162 1 11.4379C1 5.67319 5.92487 1 12 1C18.0751 1 23 5.67319 23 11.4379Z"
        stroke={props.borderColor || "#F5F5F5"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IconV2>
  );
};
