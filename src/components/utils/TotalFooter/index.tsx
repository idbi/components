import React from "react";
import { defaultConfig } from "./utils";
import type { ITotalFooter } from "./types";
import * as s from "./styles";

export const TotalFooter: React.FC<ITotalFooter> = ({ total, currencySymbol, aside, config: propConfig = {} }) => {
  const config = { ...defaultConfig, ...propConfig };

  return (
    <s.Container reverse={config.pricePosition === "left"}>
      {aside ? <s.Aside light={config.lightAside}>{aside}</s.Aside> : <span />}
      <s.Price bold={config.boldSymbol}>
        {currencySymbol}
        <span>{typeof total === "string" ? total : total.toFixed(2)}</span>
      </s.Price>
    </s.Container>
  );
};
