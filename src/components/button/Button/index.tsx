import React from "react";
import * as s from "./styles";

export interface IButton {
  model?:
    | "primary"
    | "secondary"
    | "secondary-empty"
    | "tertiary"
    | "quaternary"
    | "quaternary-empty"
    | "alert-light"
    | "neutral";
  size?: "big" | "small";
  full?: boolean;
  rounded?: boolean;
  noBorder?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <s.Button {...props}>{children}</s.Button>;
};

export default Button;
