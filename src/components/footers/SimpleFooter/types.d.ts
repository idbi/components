import { IButton } from "@/components/Button/types";
import React from "react";

export interface ISimpleFooter {
  container?: {
    padding?: string,
    gap?: string,
    marginTop?: string,
    isFixed?: boolean,
    zIndex?: number,
    boxShadow?: string,
  },
  description?: string | React.ReactNode,
  buttons: IButton[],
}

export declare const SimpleFooter: (props: ISimpleFooter) => JSX.Element;
