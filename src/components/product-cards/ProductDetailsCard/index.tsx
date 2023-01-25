import React from "react";
import { ProductCardFooter } from "./ProductCardFooter";
import { TransparentBadge } from "@/components/badges/TransparentBadge";
import { IProductDetailsCard } from "./types";
import { getStatusText } from "./utils";
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
  status,
  imgLabel,
  discountBottom = true,
}: IProductDetailsCard) => {
  const unit = measureUnit || "u.";
  const hasDetails = discountBottom ? !!(productDetails || discount) : !!productDetails;

  return (
    <s.Card disabled={disabled} hasDetails={!!productDetails}>
      <s.MainContainer>
        {img?.src && (
          <s.ImgContainer>
            <div>
              <img {...img} />
            </div>
            {imgLabel}
            {status && !imgLabel && !!getStatusText(status) && (
              <s.ImgLabel status={status}>{getStatusText(status)}</s.ImgLabel>
            )}
          </s.ImgContainer>
        )}
        <s.ProductData hasDetails={!!hasDetails}>
          <s.Main disabled={disabled}>
            <TransparentBadge opacity={0.4}>{quantity}</TransparentBadge>
            {name}
          </s.Main>

          {productDetails && <s.DetailsWrapper>{productDetails}</s.DetailsWrapper>}
          {!hasDetails && (
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

      {hasDetails && (
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
