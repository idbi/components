import React from "react";
import { Radio as RadioComponent } from "../index";
import { IRadio } from "../types";

export const Radio: React.FC<IRadio> = (props) => {
  return (
    <>
      <RadioComponent {...props} id="radio1" text="opción 1" />
      <RadioComponent {...props} id="radio2" text="opción 2" />
      <RadioComponent {...props} id="radio3" text="opción 3" />
      <RadioComponent {...props} id="radio4" text="opción 4" />
    </>
  );
};
