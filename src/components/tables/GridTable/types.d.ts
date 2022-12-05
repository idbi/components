import React from "react";

export interface IGridTable {
  gridTemplateColumns: string
  maxWidth?: string
  minWidth?: string
  gap?: string
  padding?: string
  margin?: string
  header: React.ReactNode
  body: React.ReactNode
}

export declare const Badge: (props: IGridTable) => JSX.Element;
