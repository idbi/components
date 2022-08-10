import React from "react";
import { TColor } from "../Typography/TextBuilder/types";
import * as s from "./styles";

export interface IButtonV2
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";
  shape?: "rounded" | "squared" | "circular";
  design?: "solid" | "outline" | "flat" | "link";
  color?: TColor;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const ButtonV2: React.FC<IButtonV2> = ({ children, ...props }) => {
  return (
    <s.Button {...props}>
      {props.leftIcon}
      {children}
      {props.rightIcon}
    </s.Button>
  );
};

export default ButtonV2;
