import React from "react";
import type { IDetailedField } from "./types";
import * as s from "./styles";

export const DetailedField: React.FC<IDetailedField> = ({ label, children, aside, spacing, contentRight, htmlFor }) => {
  return (
    <s.Container>
      <s.Label htmlFor={htmlFor} data-light>
        {label}
      </s.Label>
      <s.MainContent spacing={spacing}>
        {!contentRight && children}
        <s.Aside data-light>{aside}</s.Aside>
        {contentRight && children}
      </s.MainContent>
    </s.Container>
  );
};
