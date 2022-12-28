import React from "react";
import { IBaseInput } from "./types";
import * as s from "./styles";

export const BaseInput = ({ alert, fullWidth, minHeight, startEl, endEl, inputRef, ...rest }: IBaseInput) => {
  return (
    <s.Container alert={alert} fullWidth={fullWidth} minHeight={minHeight ?? 45} className="base-input-container">
      {startEl}
      <input ref={inputRef} {...rest} />
      {endEl}
    </s.Container>
  );
};
