/* eslint-disable no-alert */

import { IProductDetailsCard } from "../types";

const base: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 18,
  unitPrice: 9,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
};

const noUnitPrice: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 18,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
};

const withDetails: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 18,
  unitPrice: 9,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  productDetails: (
    <>
      <li>some detail</li>
      <li>other detail</li>
    </>
  ),
};

const withDiscount: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 9,
  unitPrice: 4.5,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  discount: { prevTotal: 18, label: "-50%" },
  productDetails: (
    <>
      <li>some detail</li>
      <li>other detail</li>
    </>
  ),
};

const withImageStatusLabel: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 9,
  unitPrice: 4.5,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  discount: { prevTotal: 18, label: "-50%" },
  productDetails: (
    <>
      <li>some detail</li>
      <li>other detail</li>
    </>
  ),
  status: "accepted",
};

const disabled: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 18,
  unitPrice: 9,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  disabled: true,
  discount: { prevTotal: 18, label: "-50%" },
  productDetails: (
    <>
      <li>some detail</li>
      <li>other detail</li>
    </>
  ),
};

const noTotal: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
};

const withExportationTag: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 9,
  unitPrice: 4.5,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  productDetails: (
    <>
      <li>some detail</li>
      <li>other detail</li>
    </>
  ),
  status: "accepted",
  isExportation: true,
};

const withBottomReason: IProductDetailsCard = {
  name: "Jugo de papaya con leche deslactosada",
  quantity: 2,
  currencySymbol: "S/",
  total: 9,
  comment: "",
  img: {
    src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
  status: "wasted",
  discount: { prevTotal: 18, label: "-50%" },
  reasonBottom: (
    <div>
      <strong>Razón:</strong> Otro - El cliente empujó la bandeja y se derramó
      el trago (ciervo)
    </div>
  ),
};

export const mockConfirmationCardV2Props = {
  base,
  noUnitPrice,
  withDetails,
  withDiscount,
  withImageStatusLabel,
  disabled,
  noTotal,
  withExportationTag,
  withBottomReason,
};
