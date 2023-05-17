import React, { ReactNode } from "react";
import { DefaultTheme, StyledComponent } from "styled-components";

export interface ISectionedCard {
  children?: ReactNode;
}

export declare const SectionedCard: ((props: ISectionedCard) => JSX.Element) & {
  Header: StyledComponent<"div", DefaultTheme, {}, never>;
  Body: StyledComponent<"div", DefaultTheme, {}, never>;
  Footer: StyledComponent<"div", DefaultTheme, {}, never>;
};
