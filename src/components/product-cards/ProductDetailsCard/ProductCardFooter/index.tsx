import React from "react";
import { IProductDetailsCard } from "../types";
import * as s from "./styles";

type IProps = Pick<
  IProductDetailsCard,
  "currencySymbol" | "unitPrice" | "total" | "measureUnit" | "discount" | "disabled"
> & { bottom?: boolean };

const isNullish = <T extends any>(value: T | undefined | null): value is undefined | null => {
  return value === undefined || value === null;
};

export const ProductCardFooter = ({
  currencySymbol,
  unitPrice = null,
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
        {unitPrice !== null && (
          <>
            {currencySymbol}
            {unitPrice.toFixed(2)} x {unit}
          </>
        )}
      </span>
      <s.TotalPrices disabled={disabled}>
        {discount && (
          <>
            <span>
              {(!!discount.prevTotal || discount.prevTotal === 0) && (
                <>
                  {currencySymbol}
                  {discount.prevTotal.toFixed(2)}
                </>
              )}
            </span>
            <s.Patch>{discount.label}</s.Patch>
          </>
        )}
        {isNullish(total) ? (
          <span />
        ) : (
          <span>
            {currencySymbol}
            <span>{total.toFixed(2)}</span>
          </span>
        )}
      </s.TotalPrices>
    </s.Footer>
  );
};
