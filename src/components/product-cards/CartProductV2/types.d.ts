import { IEditQuantityInput } from "@/components/forms/EditQuantityInput/types";
import { ReactNode } from "react";

export interface ICartProductV2 {
  img?: {
    src: string;
    srcSet?: string;
    alt?: string;
  };
  name: string;
  currencySymbol: string;
  total: number;
  quantity: number;
  onChangeQuantity: IEditQuantityInput["onSetQuantity"];
  onlyIntegers?: boolean;
  onDeleteProduct: () => void;
  onClick?: () => void;
  productDetails?: ReactNode;
  discount?: { label: string; prevTotal: number };
  dishNumber?: number;
  onChangeDishNumber?: (value: number) => void;
  renderModal?: (modal: JSX.Element) => JSX.Element;
  measureUnit?: string;
}

export declare const CartProductV2: (props: ICartProductV2) => JSX.Element;
