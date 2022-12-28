import React from "react";
import { IButtonsSelect } from "./types";
import * as s from "./styles";

export const ButtonsSelect = ({ title, options, selected, onSelect }: IButtonsSelect) => {
  return (
    <s.Card>
      {title && <s.Title>{title}</s.Title>}
      <s.ButtonsContainer>
        {options.map((option) => (
          <s.Btn
            key={`${option.value}-btn`}
            selected={option.value === selected}
            onClick={() => onSelect(option.value, option)}
            disabled={!!option.disabled}
          >
            {option.content}
          </s.Btn>
        ))}
      </s.ButtonsContainer>
    </s.Card>
  );
};
