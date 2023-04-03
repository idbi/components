import React from "react";
import { IShopTable } from "../ShopTable/types";

export interface IShopTableList {
  key?: string;
  tables: IShopTable[];
  activeTableUuid?: string;
  onClick?: (tableUuid: string) => void;
}

export declare const ShopTableList: (props: IShopTableList) => JSX.Element;
