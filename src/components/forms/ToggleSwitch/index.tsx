/* eslint-disable import/namespace */
import React, { useState } from "react";
import type { IToggleSwitch } from "./types";
import * as s from "./styles";

export const ToggleSwitch: React.FC<IToggleSwitch> = ({
  initial = false,
  onToggle = () => {},
  disabled = false,
  width,
  padding,
  styleOn,
  styleOff,
}) => {
  const [state, setState] = useState(initial);

  const handleChangeToggle = () => {
    if (!disabled) {
      const newState = !state;
      setState(newState);
      onToggle(newState);
    }
  };

  return (
    <s.ToggleSwitchWrapper disabled={disabled}>
      <s.Toggle
        onClick={(e) => {
          e.stopPropagation();
          handleChangeToggle();
        }}
        toggled={state}
        width={width}
        padding={padding}
        styleOn={styleOn}
        styleOff={styleOff}
      >
        <s.ToggleBall toggled={state} width={width} padding={padding} />
        <s.RippleBg visible={state} styleOn={styleOn} />
      </s.Toggle>
    </s.ToggleSwitchWrapper>
  );
};
