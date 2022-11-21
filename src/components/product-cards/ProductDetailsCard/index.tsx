import React from "react";
import { ProductCardFooter } from "./ProductCardFooter";
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
  productDetails,
  discount,
  measureUnit,
  disabled,
}: IProductDetailsCard) => {
  const unit = measureUnit || "u.";

  return (
    <s.Card disabled={disabled} hasDetails={!!productDetails}>
      <s.MainContainer>
        {img?.src && <img {...img} />}
        <s.ProductData hasDetails={!!productDetails}>
          <s.Main disabled={disabled}>
            <TransparentBadge opacity={0.4}>{quantity}</TransparentBadge>
            {name}
          </s.Main>

          {productDetails && <s.DetailsWrapper>{productDetails}</s.DetailsWrapper>}
          {!productDetails && (
            <ProductCardFooter
              currencySymbol={currencySymbol}
              unitPrice={unitPrice}
              total={total}
              discount={discount}
              disabled={disabled}
            />
          )}
        </s.ProductData>
      </s.MainContainer>

      {productDetails && (
        <ProductCardFooter
          currencySymbol={currencySymbol}
          unitPrice={unitPrice}
          total={total}
          discount={discount}
          disabled={disabled}
          bottom
        />
      )}
    </s.Card>
  );
};
