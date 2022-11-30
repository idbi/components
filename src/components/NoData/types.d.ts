import React from "react";

export interface INoData {
  text?: string | React.node;
  marginTop?: string;
  marginBottom?: string;
  style?: React.CSSProperties;
}

export declare const NoData: (props: INoData) => JSX.Element;
