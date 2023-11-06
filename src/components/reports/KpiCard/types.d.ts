import React, { ReactNode } from "react";

export interface IKpiCard {
  icon?: ReactNode;
  title?: ReactNode;
  total_PEN?: number;
  total_USD?: number;
  tip_PEN?: number;
  tip_USD?: number;
  main?: boolean;
  autoWidth?: boolean;
  loading?: boolean;
  noDecimals?: boolean;
  containerStyle?: CSSProperties;
  quantity?: { title: string; value: number };
  big?: boolean;
}

export declare const KpiCard: (props: IKpiCard) => JSX.Element;
