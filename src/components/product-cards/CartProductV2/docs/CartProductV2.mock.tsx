/* eslint-disable no-alert */
import { ICartProductV2 } from "../types";

const base: ICartProductV2 = {
  name: "Paquete de blueberries (0.9 kg)",
  currencySymbol: "S/",
  onChangeQuantity: () => {},
  onDeleteProduct: () => {},
  quantity: 1,
  total: 10,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  onClick: () => alert("clicked card"),
};

const withCustomDetails: ICartProductV2 = {
  name: "Paquete de blueberries (0.9 kg)",
  currencySymbol: "S/",
  onChangeQuantity: () => {},
  onDeleteProduct: () => {},
  quantity: 1,
  total: 10,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  onClick: () => alert("clicked card"),
  productDetails: (
    <ul style={{ padding: 0, listStylePosition: "inside", margin: 0 }}>
      <li>Some detail</li>
      <li>Other detail, asd asd asd </li>
    </ul>
  ),
};

const withDiscount: ICartProductV2 = {
  name: "Paquete de blueberries (0.9 kg)",
  currencySymbol: "S/",
  onChangeQuantity: () => {},
  onDeleteProduct: () => {},
  quantity: 1,
  total: 10,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  onClick: () => alert("clicked card"),
  productDetails: (
    <ul style={{ padding: 0, listStylePosition: "inside", margin: 0 }}>
      <li>Some detail</li>
      <li>Other detail, asd asd asd </li>
    </ul>
  ),
  discount: { label: "-50%", prevTotal: 20 },
};

const withDishOrder: ICartProductV2 = {
  name: "Paquete de blueberries (0.9 kg)",
  currencySymbol: "S/",
  onChangeQuantity: () => {},
  onDeleteProduct: () => {},
  quantity: 1,
  total: 10,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  onClick: () => alert("clicked card"),
  productDetails: (
    <ul style={{ padding: 0, listStylePosition: "inside", margin: 0 }}>
      <li>Some detail</li>
      <li>Other detail, asd asd asd </li>
    </ul>
  ),
  dishNumber: 2,
  onChangeDishNumber: () => {},
};

export const mockConfirmationCardV2Props = {
  base,
  withCustomDetails,
  withDiscount,
  withDishOrder,
};
