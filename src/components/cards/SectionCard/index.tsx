import React from "react";
import { ISectionCard } from "./types";
import * as s from "./styles";

export const SectionCard = ({
  title,
  icon,
  headerAside,
  children,
}: ISectionCard) => {
  return (
    <s.Card>
      <s.Header hasContent={!!children}>
        <s.Title>
          {icon} {title}
        </s.Title>
        {headerAside}
      </s.Header>
      {children}
    </s.Card>
  );
};
