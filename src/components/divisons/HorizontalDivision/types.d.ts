import { ReactNode } from "react";

export interface IHorizontalDivision {
  children: ReactNode;
  thickness?: number;
  hrMinWidth?: number;
}

export declare const HorizontalDivision: (props: IHorizontalDivision) => JSX.Element;
