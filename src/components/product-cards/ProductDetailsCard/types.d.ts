import { ReactNode } from "react";
import { ICartProduct } from "../CartProduct/types";

export type IProductDetailsCard = Pick<
  ICartProduct,
  "name" | "img" | "currencySymbol" | "unitPrice" | "total" | "quantity" | "comment" | "measureUnit" | "productDetails"
> & { disabled?: boolean; discount?: { label: string; prevTotal: number } };

export declare const ProductDetailsCard: (props: IProductDetailsCard) => JSX.Element;
