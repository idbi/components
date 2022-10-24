import { OrderStatusType } from "../../../types/OrderStatusType";
import type { Spacing, TColor, TSizes } from "../Typography/TextBuilder/types";

export interface IStatusBanner {
  status: OrderStatusType;
  title?: string;
  description?: string;
  icon?: ReactNode;
  radius?: number;
  children?: ReactNode;
}

export declare const StatusBanner: (props: IStatusBanner) => JSX.Element;
