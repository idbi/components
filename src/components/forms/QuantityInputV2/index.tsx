import React from "react";
import { IQuantityInputV2 } from "./types";
import { MinusIcon } from "@/icons-v2/MinusIcon";
import { PlusIcon } from "@/icons-v2/PlusIcon";
import * as s from "./styles";

export const QuantityInputV2 = ({
  quantity,
  onChange,
  icon,
  canDecrease = true,
  canIncrease = true,
}: IQuantityInputV2) => {
  return (
    <s.Container>
      <s.Btn onClick={() => onChange(quantity - 1)} disabled={quantity <= 1 || !canDecrease}>
        <MinusIcon size={17} />
      </s.Btn>
      <s.Label>
        {quantity} {icon}
      </s.Label>
      <s.Btn onClick={() => onChange(quantity + 1)} disabled={!canIncrease}>
        <PlusIcon size={17} />
      </s.Btn>
    </s.Container>
  );
};
