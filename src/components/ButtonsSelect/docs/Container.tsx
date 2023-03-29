import React, { useState } from "react";
import { ButtonsSelect as ButtonsSelectComponent } from "..";
import { IButtonsSelect } from "../types";

export const ButtonsSelect = (props: IButtonsSelect) => {
  const [selected, setSelected] = useState(props.selected);
  return (
    <ButtonsSelectComponent
      {...props}
      selected={selected}
      onSelect={(val) => setSelected(val)}
    />
  );
};
