import React from "react";
import { IHorizontalDivision } from "./types";
import * as s from "./styles";

export const HorizontalDivision = ({ children, thickness = 1, hrMinWidth = 15 }: IHorizontalDivision) => {
  return (
    <s.Container>
      <s.Division thickness={thickness} minWidth={hrMinWidth} />
      {children}
      <s.Division thickness={thickness} minWidth={hrMinWidth} />
    </s.Container>
  );
};
