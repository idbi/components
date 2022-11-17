import React, { useState } from "react";
import { EditQuantityInput } from "..";
import { IEditQuantityInput } from "../types";

export type IEditQuantityInputContainer = Omit<IEditQuantityInput, "onSetQuantity" | "hasError"> & {
  setNull?: boolean;
};

export const Container = (props: IEditQuantityInputContainer) => {
  const [value, setValue] = useState<null | number | string>(props.value);

  return (
    <EditQuantityInput
      hasError={value === null}
      onSetQuantity={(val) => setValue(val === 0 ? null : val)}
      {...props}
      value={value}
    />
  );
};
