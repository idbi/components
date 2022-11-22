import React, { useState } from "react";
import { EditQuantityInput } from "@/components/forms/EditQuantityInput";
import { ArrowIcon } from "@/icons-v2/ArrowIcon";
import { ICartProduct } from "./types";
import * as s from "./styles";

export const CartProduct = ({
  img,
  name,
  currencySymbol,
  total,
  unitPrice,
  quantity,
  comment,
  onClick,
  onChangeQuantity,
  onDeleteProduct,
  onChangeComment,
  discount,
  measureUnit,
  productDetails,
  renderModal,
  onlyIntegers,
}: ICartProduct) => {
  const [showDetails, setShowDetails] = useState(true);

  const unit = measureUnit || "u.";

  return (
    <s.Card>
      <s.Header onClick={onClick ? onClick : () => {}} canClick={!!onClick}>
        {img?.src && <s.Img {...img} />}
        <s.ProductData>
          <s.Name detailsActive={showDetails}>
            {name}
            <ArrowIcon
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails((s) => !s);
              }}
            />
          </s.Name>
          {discount && <s.DiscountLabel>{discount.label}</s.DiscountLabel>}
          <s.PriceWrapper>
            {discount && (
              <s.Patch>
                -{currencySymbol}
                {discount.discountedAmount.toFixed(2)}
              </s.Patch>
            )}
            <s.Price>
              {currencySymbol}
              <span>{total.toFixed(2)}</span>
            </s.Price>
          </s.PriceWrapper>
        </s.ProductData>
      </s.Header>

      {showDetails && (
        <div>
          <s.Input
            value={comment}
            onChange={(e) => onChangeComment(e.target.value)}
            placeholder="Agregar algún comentario"
          />
          {productDetails && <s.DetailsWrapper>{productDetails}</s.DetailsWrapper>}
        </div>
      )}

      <s.Footer>
        <s.Price>
          {currencySymbol}
          <span>{unitPrice.toFixed(2)}</span> x {unit}
        </s.Price>
        <EditQuantityInput
          value={quantity}
          onSetQuantity={onChangeQuantity}
          measureUnit={unit}
          onDelete={onDeleteProduct}
          renderModal={renderModal}
          onlyIntegers={onlyIntegers}
        />
      </s.Footer>
    </s.Card>
  );
};
