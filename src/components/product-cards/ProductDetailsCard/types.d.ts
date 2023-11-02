import { ReactNode } from "react";
import { StatusType } from "../../../types/globalTypes";
import { ICartProduct } from "../CartProduct/types";

export type IProductDetailsCard = Pick<
  ICartProduct,
  "name" | "img" | "currencySymbol" | "quantity" | "measureUnit" | "productDetails"
> & {
  total?: number | null;
  unitPrice?: number | null;
  comment?: string;
  disabled?: boolean;
  discount?: { label: string; prevTotal?: number | null };
  status?: StatusType;
  imgLabel?: JSX.Element;
  discountBottom?: boolean;
};

export declare const ProductDetailsCard: (props: IProductDetailsCard) => JSX.Element;
