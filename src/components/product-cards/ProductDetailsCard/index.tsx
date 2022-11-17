import React from "react";
import { TransparentBadge } from "@/components/badges/TransparentBadge";
import { IProductDetailsCard } from "./types";
import * as s from "./styles";

export const ProductDetailsCard = ({
  name,
  img,
  quantity,
  currencySymbol,
  unitPrice,
  total,
  discount,
  measureUnit,
  disabled,
}: IProductDetailsCard) => {
  const unit = measureUnit || "u.";

  return (
    <s.Card disabled={disabled}>
      {img?.src && <img {...img} />}
      <s.ProductData>
        <s.Main disabled={disabled}>
          <TransparentBadge opacity={0.4}>{quantity}</TransparentBadge>
          {name}
        </s.Main>
        <s.Footer disabled={disabled}>
          <span>
            {currencySymbol}
            {unitPrice.toFixed(2)} x {unit}
          </span>
          <span>
            {currencySymbol}
            <span>{total.toFixed(2)}</span>
          </span>
        </s.Footer>
      </s.ProductData>
    </s.Card>
  );
};
