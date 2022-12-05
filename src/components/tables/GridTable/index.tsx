import React from "react";
import type { IGridTable } from "./types";
import * as s from "./styles";

export const GridTable: React.FC<IGridTable> = ({
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
