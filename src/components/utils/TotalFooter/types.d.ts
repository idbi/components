import React, { ReactNode } from "react";

export interface IConfig {
  pricePosition?: "right" | "left";
  boldSymbol?: boolean;
  lightAside?: boolean;
}

export interface ITotalFooter {
  total: number | string;
  currencySymbol: string;
  aside?: ReactNode;
  config?: IConfig;
}

export declare const TotalFooter: (props: ITotalFooter) => JSX.Element;
