import React from "react";

export type TableStatusType = "occupied" | "available" | "selected"

export interface IShopTable {
  onClick?: () => void;
  label: string;
  status?: TableStatusType;
  counter?: number;
  noHover?: boolean;
  noCounter?: boolean;
}

export declare const ShopTable: (props: IShopTable) => JSX.Element;
