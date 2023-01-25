import React, { useState } from "react";
import { ButtonsSwitch as ButtonsSwitchComponent } from "..";
import { IButtonsSwitch } from "../types";

export type IButtonsSwitchContainer = Pick<
  IButtonsSwitch,
  "options" | "model" | "disabled" | "fullWidth" | "equalBtns"
>;

export const ButtonsSwitch = (props: IButtonsSwitchContainer) => {
  const [selected, setSelected] = useState(props.options[0].value);

  return <ButtonsSwitchComponent selected={selected} onSelect={(val) => setSelected(val)} {...props} />;
};
