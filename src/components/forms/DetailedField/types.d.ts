import React, { ReactNode } from "react";

export interface IDetailedField {
  label: string;
  children: ReactNode;
  aside?: string;
  spacing?: number;
  contentRight?: boolean;
  htmlFor?: string;
}

export declare const DetailedField: (props: IDetailedField) => JSX.Element;
