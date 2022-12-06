import React from "react";

export interface ITable {
  gridTemplateColumns: string
  maxWidth?: string
  minWidth?: string
  gap?: string
  padding?: string
  margin?: string
  header: React.ReactNode
  body: React.ReactNode
}

export type LocationType =  "left" | "center" | "right"

export interface IItemRow {
  separator?: boolean;
  location?: LocationType;
  itemFlex?: boolean;
  gridColumn?: string;
}

export interface ITr {
  gridTemplateColumns?: string
  gridColumn?: string
}

export interface IGridTable {
  Table: React.FC<ITable>;
  Th: StyledComponent<"div", DefaultTheme, IItemRow, never>;
  Td: StyledComponent<"div", DefaultTheme, IItemRow, never>;
  Tr: StyledComponent<"div", DefaultTheme, ITr, never>;
}

export declare const GridTable: (props: IGridTable) => JSX.Element;
