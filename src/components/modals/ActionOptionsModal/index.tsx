import React from "react";
import { CardModal } from "../CardModal";
import { IActionOptionsModal } from "./types";
import * as s from "./styles";

export const ActionOptionsModal = ({
  title,
  options,
  onClose,
  closeOnAction,
  modalProps = {},
}: IActionOptionsModal) => {
  return (
    <CardModal
      onClose={onClose}
      closeIcon={true}
      contentLocation="bottom"
      padding="20px"
      maxWidth="600px"
      {...modalProps}
    >
      <s.Header>{title}</s.Header>
      <s.OptionsContainer>
        {options.map((option, i) => (
          <s.Option
            key={`modal-option-${i}`}
            disabled={option.disabled}
            onClick={() => {
              if (option.disabled) return;
              option.onClick();
              if (closeOnAction) onClose();
            }}
          >
            {option.icon} {option.content}
          </s.Option>
        ))}
      </s.OptionsContainer>
    </CardModal>
  );
};
