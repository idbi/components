import React, { ReactNode } from "react";

export type ITab = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  active?: boolean;
  tabWidth?: number;
  tabHeight?: number;
  tabFullWidth?:boolean;
  rounded?: boolean;
  activeColor?: string;
};

export declare const Tab: (props: ITab) => JSX.Element;
