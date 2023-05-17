import React from "react";
import type { IFooter } from "./types";
import * as s from "./styles";

export const Footer: React.FC<IFooter> = ({ model = "primary", positionStrategy = "sticky", total, children }) => {
  return (
    <s.Container model={model} position={positionStrategy}>
      <s.Content>
        {total && (
          <s.TotalContainer vertical={!!children}>
            {total.label}
            <span>
              {total.currencySymbol} {typeof total.value === "string" ? total.value : total.value.toFixed(2)}
            </span>
          </s.TotalContainer>
        )}
        {children}
      </s.Content>
    </s.Container>
  );
};
