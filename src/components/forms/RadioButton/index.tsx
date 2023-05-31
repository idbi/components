import React from "react";
import type { IRadioButton } from "./types";
import * as s from "./styles";

export const RadioButton: React.FC<IRadioButton> = ({ text, ...rest }) => {
  return (
    <s.Container isActive={rest?.checked || false}>
      <input type="radio" {...rest} />
      <label htmlFor={rest?.id}>{text}</label>
    </s.Container>
  );
};
