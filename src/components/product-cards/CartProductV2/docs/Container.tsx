import React, { useState } from "react";
import { CartProductV2 as CartProductV2Component } from "..";
import { ICartProductV2 } from "../types";

export const CartProductV2 = (props: ICartProductV2) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const [dishNum, setDishNum] = useState(props.dishNumber)

  return (
    <CartProductV2Component
      {...props}
      total={props.total * quantity}
      quantity={quantity}
      onChangeQuantity={(val) => setQuantity(val)}
      onDeleteProduct={() => alert("delete product")}
      dishNumber={dishNum}
      onChangeDishNumber={(val) => setDishNum(val)}
    />
  );
};
