import React from "react";
import { RadioContainer } from "./styles";
import { IRadio } from "./types";

export const Radio: React.FC<IRadio> = ({ text, ...rest }) => {
  return (
    <RadioContainer disabled={Boolean(rest.disabled)}>
      <input type="radio" {...rest} />
      <label htmlFor={rest?.id}>{text}</label>
    </RadioContainer>
  );
};
