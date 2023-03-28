import React from "react";
import { EditQuantityInput } from "@/components/forms/EditQuantityInput";
import type { ISimpleProductCard } from "./types";
import * as s from "./styles";
import defaultProduct from "../../../../assets/defaultProduct.webp";

export const SimpleProductCard: React.FC<ISimpleProductCard> = ({
  img,
  name,
  description,
  code,
  discount,
  price,
  style,
  quantityInput,
  maxWidth = "",
  onClick = () => {},
  disabled = false,
  disabledMessage,
}) => {
  return (
    <s.Container
      maxWidth={maxWidth}
      disabled={disabled}
      style={style}
      onClick={(e) => {
        if (disabled) return;
        e.stopPropagation();
        onClick();
      }}
    >
      {discount ? <s.Discount>{discount}</s.Discount> : null}
      {disabled ? <s.GrayFront /> : null}
      <s.GrayOverlay />
      {!img?.src && !img?.srcSet ? (
        <s.Img
          src={defaultProduct}
          alt={img?.alt}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <s.Img src={img?.src} srcSet={img?.srcSet} alt={img?.alt} />
      )}
      {code ? <s.Code>{code}</s.Code> : null}
      <s.Info>
        <s.Name>{name}</s.Name>
        {description ? <s.Description>{description}</s.Description> : null}
        {disabledMessage ? (
          <s.DisabledMessage>{disabledMessage}</s.DisabledMessage>
        ) : null}
        {price && !disabledMessage ? (
          <s.PriceNumber>
            <s.PriceSymbol>{price?.symbol}</s.PriceSymbol>
            {price?.amount}
          </s.PriceNumber>
        ) : null}
      </s.Info>
      {quantityInput?.show ? (
        <EditQuantityInput
          {...quantityInput}
          styleContainer={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
          }}
          disabled={disabled}
        />
      ) : null}
    </s.Container>
  );
};
