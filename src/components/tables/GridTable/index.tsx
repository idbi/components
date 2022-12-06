import React from "react";
import type { IGridTable, ITable } from "./types";
import * as s from "./styles";

export const Table: React.FC<ITable> = ({
  gridTemplateColumns,
  maxWidth,
  minWidth,
  gap,
  padding,
  margin,
  header,
  body,
}) => {
  return (
    <s.MobileContainer>
      <s.Container
        gridTemplateColumns={gridTemplateColumns}
        maxWidth={maxWidth}
        minWidth={minWidth}
        gap={gap}
        padding={padding}
        margin={margin}
      >
        {header && header}
        {body && body}
      </s.Container>
    </s.MobileContainer>
  );
};

export const GridTable: IGridTable = {
  Table,
  Th: s.Th,
  Td: s.Td,
  Tr: s.Tr,
};
