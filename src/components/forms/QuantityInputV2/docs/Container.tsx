import React, { useState } from "react";
import { QuantityInputV2 as QuantityInputV2Component } from "..";
import { IQuantityInputV2 } from "../types";

export const QuantityInputV2 = (props: IQuantityInputV2) => {
  const [quantity, setQuantity] = useState(props.quantity);

  return (
    <QuantityInputV2Component
      quantity={quantity}
      onChange={(val) => setQuantity(val)}
      icon={props.icon}
      decrease={props.decrease}
      increase={props.increase}
      fullWidth={props.fullWidth}
    />
  );
};
