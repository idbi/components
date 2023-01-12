import React from "react";
import { CSSProperties } from "styled-components";

export interface IKpiCardV2 {
  name?: string;
  symbol?: any;
  currentAmount?: number;
  oldAmount?: number;
  loading?: boolean;
  autoWidth?: boolean;
  noDecimals?: boolean;
  containerStyle?: CSSProperties;
}

export declare const KpiCardV2: (props: IKpiCardV2) => JSX.Element;
