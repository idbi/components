

import { ReactNode } from "react";
import { OrderType } from "../../../types/OrderType";
import type { Spacing, TColor, TSizes } from "../Typography/TextBuilder/types";

export interface IOrderTypeBanner {
  type: OrderType;
  message?: string;
  children?: ReactNode
}

export declare const OrderTypeBanner: (props: IOrderTypeBanner) => JSX.Element;
