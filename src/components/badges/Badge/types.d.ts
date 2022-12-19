import React, { CSSProperties } from "react";

export interface IBadge {
  text?: string | React.ReactNode;
  padding?: string;
  color?: string;
  background?: string;
  applyFlex?: boolean;
  maxWidth?: string;
  weight?: string;
  borderRadius?: string;
  withBorder?: boolean;
}

export declare const Badge: (props: IBadge) => JSX.Element;
