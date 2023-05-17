import React, { ReactNode } from "react";

export type Model = "primary" | "secondary";

export interface IFooter {
  model?: Model;
  total?: { label: string; currencySymbol?: string; value: string | number };
  children?: ReactNode;
  positionStrategy?: "sticky" | "fixed" | "absolute" | "static";
}

export declare const Footer: (props: IFooter) => JSX.Element;
