import React, { useState } from "react";
import { EditQuantityInput } from "@/components/forms/EditQuantityInput";
import { ICartProductV2 } from "./types";
import { DishPopup } from "./DishPopup";
import * as s from "./styles";

export const CartProductV2 = ({
  img,
  name,
  currencySymbol,
  total,
  quantity,
  onClick,
  onChangeQuantity,
  onDeleteProduct,
  discount,
  productDetails,
  renderModal,
  onlyIntegers,
  dishNumber,
  onChangeDishNumber,
  measureUnit,
  zIndex,
}: ICartProductV2) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <s.Container>
      {dishNumber && (
        <s.DishOrderContainer clickeable={!!onChangeDishNumber}>
          N°
          <div>
            <button
              onClick={() => {
                if (onChangeDishNumber) setShowPopup(true);
              }}
            >
              {dishNumber}
            </button>
            {showPopup && onChangeDishNumber && (
              <DishPopup
                onClose={() => setShowPopup(false)}
                onSelect={(val) => onChangeDishNumber(val)}
                selected={dishNumber}
              />
            )}
          </div>
        </s.DishOrderContainer>
      )}

      <s.Main>
        {img?.src && (
          <s.ImgContainer>
            <s.Img {...img} />
            {discount && <s.DiscountLabel>{discount.label}</s.DiscountLabel>}
          </s.ImgContainer>
        )}

        <s.ProductInformation clickeable={!!onClick} onClick={onClick || (() => {})}>
          <s.Details>
            <span>{name}</span>
            {productDetails && <s.Details>{productDetails}</s.Details>}
          </s.Details>

          <s.Footer>
            <div>
              <s.Price>
                {currencySymbol}
                <span>{total.toFixed(2)}</span>
              </s.Price>
              {discount && (
                <s.PrevTotal>
                  {currencySymbol} {discount.prevTotal.toFixed(2)}
                </s.PrevTotal>
              )}
            </div>
            <EditQuantityInput
              value={quantity}
              onSetQuantity={onChangeQuantity}
              onDelete={onDeleteProduct}
              renderModal={renderModal}
              onlyIntegers={onlyIntegers}
              measureUnit={measureUnit ?? "u."}
              zIndex={zIndex}
            />
          </s.Footer>
        </s.ProductInformation>
      </s.Main>
    </s.Container>
  );
};
