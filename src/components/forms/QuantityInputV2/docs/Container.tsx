import React, { useState } from "react";
import { QuantityInputV2 } from "..";
import { IQuantityInputV2 } from "../types";

export const Container = (props: IQuantityInputV2) => {
  const [quantity, setQuantity] = useState(props.quantity);

  return (
    <QuantityInputV2
      quantity={quantity}
      onChange={(val) => setQuantity(val)}
      icon={props.icon}
      decrease={props.decrease}
      increase={props.increase}
      fullWidth={props.fullWidth}
    />
  );
};
