import React from "react";

export interface IKpiCard {
  title?: string;
  total_PEN?: number;
  total_USD?: number;
  tip_PEN?: number;
  tip_USD?: number;
  main?: boolean;
  autoWidth?: boolean;
  loading?: boolean;
  noDecimals?: boolean;
  containerStyle?: CSSProperties;
}

export declare const KpiCard: (props: IKpiCard) => JSX.Element;
