import React from "react";
import { ITab } from "./types";
import { theme } from "@/theme";
import * as s from "./styles";

export const Tab = ({
  children,
  active,
  tabWidth = 24,
  tabHeight = 4,
  activeColor = theme.color.SECONDARY[900],
  ...rest
}: ITab) => {
  return (
    <s.Tab isActive={active} noWrap activeColor={activeColor} tabWidth={tabWidth} tabHeight={tabHeight} {...rest}>
      {children}
    </s.Tab>
  );
};
