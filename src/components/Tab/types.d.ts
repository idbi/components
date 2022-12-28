import React, { ReactNode } from "react";

export type ITab = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  active?: boolean;
  tabWidth?: number;
  rounded?: boolean;
  activeColor?: string;
};
