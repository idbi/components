import React from "react";
import { TransparentBadge } from "@/components/badges/TransparentBadge";
import { ProductCardFooter } from "./ProductCardFooter";
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
  reasonBottom,
  discountBottom = true,
  isExportation = false,
  onClick,
}: IProductDetailsCard) => {
  const unit = measureUnit || "u.";
  const hasDetails = discountBottom ? !!(productDetails || discount) : !!productDetails;

  return (
    <s.Card
      disabled={disabled}
      hasDetails={!!productDetails}
      hasBottomReason={!!reasonBottom}
      onClick={onClick}
    >
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
        <s.ProductData>
          <s.Main disabled={disabled}>
            <TransparentBadge opacity={0.4}>{quantity}</TransparentBadge>
            {name}
          </s.Main>

          {productDetails && (
            <s.DetailsWrapper>{productDetails}</s.DetailsWrapper>
          )}
          {(!hasDetails || !!reasonBottom) && (
            <ProductCardFooter
              currencySymbol={currencySymbol}
              unitPrice={unitPrice}
              total={total}
              discount={discount}
              bottom={false}
              isExportation={isExportation}
              disabled={disabled}
            />
          )}
        </s.ProductData>
      </s.MainContainer>

      {hasDetails && !reasonBottom && (
        <ProductCardFooter
          currencySymbol={currencySymbol}
          unitPrice={unitPrice}
          total={total}
          discount={discount}
          isExportation={isExportation}
          disabled={disabled}
          bottom
        />
      )}
      {reasonBottom && <s.ReasonContainer>{reasonBottom}</s.ReasonContainer>}
    </s.Card>
  );
};
