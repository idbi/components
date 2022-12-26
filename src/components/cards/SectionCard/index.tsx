import React from "react";
import { ISectionCard } from "./types";
import * as s from "./styles";

export const SectionCard = ({ title, icon, headerAside, children, sections = [] }: ISectionCard) => {
  return (
    <s.Card>
      <s.Header hasContent={!!children}>
        <s.Title>
          {icon} {title}
        </s.Title>
        {headerAside}
      </s.Header>
      {children}
      {sections.map((section) => section && <s.Section>{section}</s.Section>)}
    </s.Card>
  );
};
