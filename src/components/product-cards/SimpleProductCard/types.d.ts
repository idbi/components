import { IEditQuantityInput } from "@/components/forms/EditQuantityInput/types";
import React, { CSSProperties } from "react";

interface IQuantityInput extends Omit<IEditQuantityInput, "styleContainer" | "disabled">{
  show: boolean;
}

export interface ISimpleProductCard {
  name: string;
  description?: string;
  code?: string;
  discount?: string;
  price: {
    amount: string;
    symbol: string;
  }
  img: {
    src: string;
    srcSet?: sring;
    alt?: string;
  };
  quantityInput?: IQuantityInput;
  maxWidth?: string;
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  disabledMessage?: string;
}

export declare const SimpleProductCard: (props: ISimpleProductCard) => JSX.Element;
