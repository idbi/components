import React from "react";
import { IQuantityInputV2 } from "./types";
import { MinusIcon } from "@/icons-v2/MinusIcon";
import { PlusIcon } from "@/icons-v2/PlusIcon";
import * as s from "./styles";

export const QuantityInputV2 = ({ quantity, onChange, icon, increase, decrease, fullWidth }: IQuantityInputV2) => {
  return (
    <s.Container fullWidth={fullWidth}>
      {(decrease?.available ?? true) && (
        <s.Btn onClick={() => onChange(quantity - 1)} disabled={quantity <= 1 || !!decrease?.disabled}>
          <MinusIcon size={17} />
        </s.Btn>
      )}
      <s.Label>
        {quantity} {icon}
      </s.Label>
      {(increase?.available ?? true) && (
        <s.Btn onClick={() => onChange(quantity + 1)} disabled={!!increase?.disabled}>
          <PlusIcon size={17} />
        </s.Btn>
      )}
    </s.Container>
  );
};
