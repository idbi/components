import React, { useState } from "react";
import { EditQuantityInput as EditQuantityInputComponent } from "..";
import { IEditQuantityInput } from "../types";

export type IEditQuantityInputContainer = Omit<
  IEditQuantityInput,
  "onSetQuantity" | "hasError"
> & {
  setNull?: boolean;
};

export const EditQuantityInput = (props: IEditQuantityInputContainer) => {
  const [value, setValue] = useState<null | number | string>(props.value);

  return (
    <EditQuantityInputComponent
      hasError={value === null}
      onSetQuantity={(val) => setValue(val === 0 ? null : val)}
      {...props}
      value={value}
    />
  );
};
