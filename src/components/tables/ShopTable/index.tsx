import React from "react";
import { IdiShopTable } from "@/icons/IdiShopTable";
import { BsCheckCircle } from "react-icons/bs";
import type { IShopTable } from "./types";
import * as s from "./styles";

export const ShopTable: React.FC<IShopTable> = ({
  onClick,
  label,
  status = "available",
  counter = 0,
  noHover = false,
}) => {
  return (
    <s.Container>
      <s.Counter status={status} occupied={counter > 0}>
        {counter}
        {counter > 0 ? <BsCheckCircle size={14} /> : null}
      </s.Counter>
      <s.Table
        onClick={() => onClick && onClick()}
        status={status}
        noHover={noHover}
      >
        <IdiShopTable
          size={98}
          color={s.tableColor[status]}
          colorStroke={s.tableColorStroke[status]}
        />
        <s.Label status={status} length={label?.length || 0}>
          {label}
        </s.Label>
      </s.Table>
    </s.Container>
  );
};
