import React from "react";
import { IBaseTextArea } from "./types";
import * as s from "./styles";

export const BaseTextArea = ({
  alert,
  fullWidth,
  minHeight,
  inputRef,
  containerProps = {},
  ...rest
}: IBaseTextArea) => {
  return (
    <s.Container
      alert={alert}
      fullWidth={fullWidth}
      minHeight={minHeight ?? 45}
      className="base-input-container"
      {...containerProps}
    >
      <textarea ref={inputRef} {...rest} />
    </s.Container>
  );
};
