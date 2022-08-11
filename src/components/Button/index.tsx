import React from "react";
import * as s from "./styles";
import type { IButton } from "./types";

export const Button: React.FC<IButton> = ({ children, ...props }) => {
  return (
    <s.Button {...props}>
      {props.leftIcon}
      {children}
      {props.rightIcon}
    </s.Button>
  );
};
