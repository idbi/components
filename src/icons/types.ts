import React from "react";

export interface IIcon {
  size?: number;
  color?: string;
  onClick?: () => void;
  styleContainer?: React.CSSProperties;
}
