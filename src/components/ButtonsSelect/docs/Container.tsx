import React, { useState } from "react";
import { ButtonsSelect } from "..";
import { IButtonsSelect } from "../types";

export const Container = (props: IButtonsSelect) => {
  const [selected, setSelected] = useState(props.selected);
  return <ButtonsSelect {...props} selected={selected} onSelect={(val) => setSelected(val)} />;
};
