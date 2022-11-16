import { ReactNode } from "react";
import { ICartProduct } from "../CartProduct/types";

export type IProductDetailsCard = Pick<
  ICartProduct,
  | "name"
  | "img"
  | "currencySymbol"
  | "unitPrice"
  | "total"
  | "quantity"
  | "comment"
  | "discount"
  | "measureUnit"
  | "productDetails"
> & { disabled?: boolean };

export declare const ProductDetailsCard: (props: IProductDetailsCard) => JSX.Element;
