import React from "react";
import { IShopTable } from "../ShopTable/types";

export interface IShopTableList {
  key?: string;
  tables: IShopTable[];
}

export declare const ShopTableList: (props: IShopTableList) => JSX.Element;
