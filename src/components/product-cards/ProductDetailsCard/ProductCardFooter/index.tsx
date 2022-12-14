import React from "react";
import { IProductDetailsCard } from "../types";
import * as s from "./styles";

type IProps = Pick<
  IProductDetailsCard,
  "currencySymbol" | "unitPrice" | "total" | "measureUnit" | "discount" | "disabled"
> & { bottom?: boolean };

export const ProductCardFooter = ({
  currencySymbol,
  unitPrice,
  total,
  measureUnit,
  discount,
  disabled,
  bottom,
}: IProps) => {
  const unit = measureUnit || "u.";

  return (
    <s.Footer disabled={disabled} bottom={bottom}>
      <span>
        {currencySymbol}
        {unitPrice.toFixed(2)} x {unit}
      </span>
      <s.TotalPrices disabled={disabled}>
        {discount && (
          <>
            <span>
              {currencySymbol}
              {discount.prevTotal.toFixed(2)}
            </span>
            <s.Patch>{discount.label}</s.Patch>
          </>
        )}
        <span>
          {currencySymbol}
          <span>{total.toFixed(2)}</span>
        </span>
      </s.TotalPrices>
    </s.Footer>
  );
};
