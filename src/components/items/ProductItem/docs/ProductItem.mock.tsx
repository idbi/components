import { CheckIcon } from "@/icons-v2/CheckIcon";
import { IProductItem } from "../types";

const base: IProductItem = {
  name: "Coca cola",
  sku: "VBNM123",
};

const noSKU: IProductItem = {
  name: "Coca cola",
};

const withImage: IProductItem = {
  name: "Coca cola",
  sku: "VBNM123",
  img: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
};

const withCustomImage: IProductItem = {
  name: "Coca cola",
  sku: "VBNM123",
  img: <CheckIcon />,
};

const noImage: IProductItem = {
  name: "Coca cola",
  sku: "VBNM123",
  img: false,
};

export const mockProductItemProps = {
  base,
  noSKU,
  withImage,
  withCustomImage,
  noImage,
};
