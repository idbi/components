import React from "react";
import { IButtonsSwitch } from "./types";
import * as s from "./styles";

export const ButtonsSwitch = ({
  options,
  selected,
  disabled,
  onSelect,
  fullWidth,
  model,
  equalBtns,
  style,
  styleButtons,
}: IButtonsSwitch) => {
  return (
    <s.Container
      disabled={disabled}
      onClick={(e) => {
        if (disabled) e.stopPropagation();
      }}
      model={model}
      fullWidth={fullWidth}
      style={style}
    >
      {options.map((option) => (
        <s.Btn
          key={option.value}
          onClick={() => onSelect(option.value)}
          active={option.value === selected}
          disabled={disabled}
          model={model}
          equal={equalBtns}
          style={styleButtons}
        >
          {option.label}
        </s.Btn>
      ))}
    </s.Container>
  );
};
