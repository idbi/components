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
  noCounter = false,
  noHover = false,
}) => {
  return (
    <s.Container>
      {!noCounter ? (
        <s.Counter status={status} occupied={counter > 0}>
          {counter}
          {counter > 0 ? <BsCheckCircle size={14} /> : null}
        </s.Counter>
      ) : null}
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
