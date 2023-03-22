import React from "react";
import type { IShopTableList } from "./types";
import * as s from "./styles";
import { ShopTable } from "../ShopTable";

export const ShopTableList: React.FC<IShopTableList> = ({ key, tables }) => {
  if (!Array.isArray(tables) || tables?.length < 1) return null;
  return (
    <s.Tables>
      {tables.map((table, i) => (
        <ShopTable key={`${i}${key}shoptablelist`} {...table} />
      ))}
    </s.Tables>
  );
};
