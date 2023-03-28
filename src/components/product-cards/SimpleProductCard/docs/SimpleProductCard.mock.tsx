import { ISimpleProductCard } from "../types";

const base: ISimpleProductCard = {
  name: "Helado de chocolate",
  description: "fekichocolates",
  code: "1GTZZVS",
  discount: "-20%",
  price: {
    amount: "10.00",
    symbol: "S/.",
  },
  quantityInput: {
    show: false,
    value: 0,
    onSetQuantity: () => {},
  },
  img: {
    src: "",
    alt: "helado de chocolate",
  },
  onClick: () => alert("click"),
  disabled: false,
};

export const mockSimpleProductCardProps = {
  base,
};
