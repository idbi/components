import React from "react";
import { IconButton } from "@/components/buttons/IconButton/styles";
import IconClose from "@/icons/IconClose";
import type { IModalHeader } from "./types";
import * as s from "./styles";

export const ModalHeader: React.FC<IModalHeader> = ({
  options,
  minWidthForOptions,
  paddingForOptions,
  hideCloseIcon,
  marginLeftForCloseIcon,
}) => {
  return (
    <s.Container>
      {!hideCloseIcon ? (
        <IconButton style={{ marginLeft: marginLeftForCloseIcon || "20px" }}>
          <IconClose />
        </IconButton>
      ) : (
        <div />
      )}
      <s.Options
        minWidthForOptions={minWidthForOptions}
        paddingForOptions={paddingForOptions}
      >
        {options?.map((option, index) => (
          <s.Option
            key={`${index}${option.id}`}
            onClick={option.onClick}
            type="button"
            mode={option.mode}
            disabled={option.disabled}
          >
            {option.text}
          </s.Option>
        ))}
      </s.Options>
    </s.Container>
  );
};
