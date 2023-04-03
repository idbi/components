import React, { useState } from "react";
import { SimpleProductCard as SimpleProductCardComponent } from "../index";
import { ISimpleProductCard } from "../types";

export const SimpleProductCard: React.FC<ISimpleProductCard> = (props) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <SimpleProductCardComponent
      name="Helado de chocolate"
      description="fekichocolates"
      code="1GTZZVS"
      discount="-20%"
      price={{
        amount: "10.00",
        symbol: "S/.",
      }}
      quantityInput={{
        minimumQuantity: 0,
        show: true,
        noDecrement: false,
        noIncrement: false,
        value: quantity,
        onSetQuantity: (val, _type) => setQuantity(val),
      }}
      img={{
        src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
        alt: "helado de chocolate",
      }}
      onClick={() => alert("click")}
      disabled={false}
    />
  );
};
