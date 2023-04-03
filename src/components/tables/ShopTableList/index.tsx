/* eslint-disable no-nested-ternary */
import React from "react";
import type { IShopTableList } from "./types";
import * as s from "./styles";
import { ShopTable } from "../ShopTable";

export const ShopTableList: React.FC<IShopTableList> = ({
  key,
  tables,
  activeTableUuid,
  onClick,
}) => {
  if (!Array.isArray(tables) || tables?.length < 1) return null;

  return (
    <s.Tables>
      {tables.map((table, i) => (
        <ShopTable
          key={`${i}${key}shoptablelist`}
          {...table}
          status={
            activeTableUuid === table.uuid
              ? "selected"
              : table?.status
              ? table.status
              : table?.counter && table?.counter > 0
              ? "occupied"
              : "available"
          }
          onClick={(uuid) => onClick && onClick(uuid)}
        />
      ))}
    </s.Tables>
  );
};
