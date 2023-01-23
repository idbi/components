import React, { useState } from "react";
import { ButtonsSwitch } from "..";
import { IButtonsSwitch } from "../types";

export type IButtonsSwitchContainer = Pick<
  IButtonsSwitch,
  "options" | "model" | "disabled" | "fullWidth" | "equalBtns"
>;

export const Container = (props: IButtonsSwitchContainer) => {
  const [selected, setSelected] = useState(props.options[0].value);

  return <ButtonsSwitch selected={selected} onSelect={(val) => setSelected(val)} {...props} />;
};
