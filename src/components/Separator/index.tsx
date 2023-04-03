import React from "react";
import type { ISeparator } from "./types";
import * as s from "./styles";
import { Text } from "../Typography";

export const Separator: React.FC<ISeparator> = ({ sections }) => {
  return (
    <s.Container>
      {sections.map((section, i) => (
        <div key={`${i}${section?.key}`}>
          <Text as="p" weight="bold" style={s.styledTitle}>{section?.title}</Text>
          <s.Group>{section?.children}</s.Group>
        </div>
      ))}
    </s.Container>
  );
};
