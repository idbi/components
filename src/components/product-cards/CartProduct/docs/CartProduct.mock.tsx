/* eslint-disable no-alert */
import { ICartProductContainer } from "./Container";

const base: ICartProductContainer = {
  name: "Paquete de blueberries (0.9 kg)",
  unitPrice: 20,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
};

const withDiscount: ICartProductContainer = {
  name: "Paquete de blueberries (0.9 kg)",
  unitPrice: 20,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  discount: { discountedAmount: 5, label: "-10% desc. de S/25.00" },
  onlyIntegers: true,
};

const withCustomDetails: ICartProductContainer = {
  name: "Paquete de blueberries (0.9 kg)",
  unitPrice: 20,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  productDetails: (
    <ul style={{ padding: "0 10px", marginBottom: 0, listStylePosition: "inside" }}>
      <li>Esto es un detalle del producto</li>
      <li>
        Esto es otro <b>detalle</b>
      </li>
    </ul>
  ),
};

const clickeable: ICartProductContainer = {
  name: "Paquete de blueberries (0.9 kg)",
  unitPrice: 20,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  onClick: () => alert("clicked!"),
  productDetails: (
    <ul style={{ padding: "0 10px", marginBottom: 0, listStylePosition: "inside" }}>
      <li>Esto es un detalle del producto</li>
      <li>
        Esto es otro <b>detalle</b>
      </li>
    </ul>
  ),
};

const customUnit: ICartProductContainer = {
  name: "Paquete de blueberries (0.9 kg)",
  unitPrice: 20,
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  onClick: () => alert("clicked!"),
  measureUnit: "kg.",
};

export const mockConfirmationCardV2Props = {
  base,
  withDiscount,
  withCustomDetails,
  clickeable,
  customUnit,
};
