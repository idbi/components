import React, { useState } from "react";
import { CartProductV2 } from "..";
import { ICartProductV2 } from "../types";

export const Container = (props: ICartProductV2) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const [dishNum, setDishNum] = useState(props.dishNumber)

  return (
    <CartProductV2
      {...props}
      total={props.total * quantity}
      quantity={quantity}
      onChangeQuantity={(quantity) => setQuantity(quantity)}
      onDeleteProduct={() => alert("delete product")}
      dishNumber={dishNum}
      onChangeDishNumber={(val) => setDishNum(val)}
    />
  );
};
