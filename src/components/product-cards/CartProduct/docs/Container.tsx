import React, { useState } from "react";
import { CartProduct as CartProductComponent } from "..";
import { ICartProduct } from "../types";

export type ICartProductContainer = Omit<
  ICartProduct,
  | "comment"
  | "quantity"
  | "onChangeComment"
  | "onChangeQuantity"
  | "onDeleteProduct"
  | "currencySymbol"
  | "total"
>;

export const CartProduct = (props: ICartProductContainer) => {
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);

  const total = props.unitPrice * quantity;

  return (
    <CartProductComponent
      comment={comment}
      quantity={quantity}
      onChangeComment={(val) => setComment(val)}
      onDeleteProduct={() => alert("delete!")}
      onChangeQuantity={(val) => setQuantity(val)}
      currencySymbol="S/"
      total={total}
      {...props}
    />
  );
};
