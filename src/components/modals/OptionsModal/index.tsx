import React from "react";
import { CardModal } from "../CardModal";
import { IOptionsModal } from "./types";
import * as s from "./styles";

export const OptionsModal = ({
  title,
  options,
  selected,
  onSelect,
  onClose,
  modalProps = {},
  optionMinHeight = 50,
  renderOptions = (optionsList) => optionsList,
}: IOptionsModal) => {
  return (
    <CardModal onClose={onClose} closeIcon contentLocation="bottom" padding="0" maxWidth="600px" {...modalProps}>
      <s.Header>{title}</s.Header>
      {renderOptions(
        <s.OptionsList>
          {options.map((option) => (
            <s.Option
              key={`modal-option-${option.value}`}
              minHeight={optionMinHeight}
              selected={option.value === selected}
              disabled={option.disabled}
              onClick={() => {
                if (!option.disabled) onSelect(option.value, option);
              }}
            >
              {option.content} {option.icon}
            </s.Option>
          ))}
        </s.OptionsList>
      )}
    </CardModal>
  );
};
