import { IEditQuantityInput } from "../../forms/EditQuantityInput/types";
import { ReactNode } from "react";

export interface ICartProduct {
  img?: {
    src: string;
    srcSet?: string;
    alt?: string;
  };
  name: string;
  currencySymbol: string;
  total: number;
  unitPrice: number;
  quantity: number;
  comment: string;
  onChangeComment: (comment: string) => void;
  onChangeQuantity: IEditQuantityInput["onSetQuantity"];
  onlyIntegers?: boolean;
  onDeleteProduct: () => void;
  onClick?: () => void;
  measureUnit?: string;
  productDetails?: ReactNode;
  discount?: {
    label: string;
    discountedAmount: number;
  };
  textarea?: boolean;
  renderModal?: (modal: JSX.Element) => JSX.Element;
}

export declare const CartProduct: (props: ICartProduct) => JSX.Element;
