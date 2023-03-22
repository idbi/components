import React from "react";

export interface IIcon {
  size?: number;
  color?: string;
  colorStroke?: string;
  onClick?: () => void;
  styleContainer?: React.CSSProperties;
}
