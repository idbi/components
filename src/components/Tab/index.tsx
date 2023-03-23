import { theme } from "@/theme";
import React from "react";
import { ITab } from "./types";
import * as s from "./styles";

export const Tab = ({
  children,
  active,
  tabWidth = 24,
  tabHeight = 4,
  bold = false,
  activeColor = theme.color.SECONDARY[900],
  ...rest
}: ITab) => {
  return (
    <s.Tab
      isActive={active}
      noWrap
      activeColor={activeColor}
      tabWidth={tabWidth}
      tabHeight={tabHeight}
      bold={bold}
      {...rest}
    >
      {children}
    </s.Tab>
  );
};
