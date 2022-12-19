import React from "react";
import { IconButton } from "@/components/buttons/IconButton/styles";
import IconClose from "@/icons/IconClose";
import type { IModalHeader } from "./types";
import * as s from "./styles";

export const ModalHeader: React.FC<IModalHeader> = ({
  container,
  options,
  closeIcon,
}) => {
  return (
    <s.Container
      marginBottom={container?.marginBottom}
      padding={container?.padding}
      isSticky={container?.isSticky}
      zIndex={container?.zIndex}
    >
      {!closeIcon?.hide ? (
        <IconButton
          onClick={closeIcon.onClick}
          style={{ marginLeft: closeIcon?.marginLeft || "20px" }}
        >
          <IconClose />
        </IconButton>
      ) : (
        <div />
      )}
      <s.Options
        minWidthForOptions={options.minWidth}
        paddingForOptions={options.padding}
      >
        {options?.options?.map((option, index) => (
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
