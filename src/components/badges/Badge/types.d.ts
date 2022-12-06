import React from "react";

export interface IBadge {
  text?: string | React.ReactNode;
  padding?: string;
  color?: string;
  background?: string;
  applyFlex?: boolean;
  maxWidth?: string;
}

export declare const Badge: (props: IBadge) => JSX.Element;
