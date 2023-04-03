import { OrderStatusType } from "@/types/OrderStatusType";
import { ReactNode } from "react";
export interface IOrderStatusBadge {
  statusName: OrderStatusType;
  removeBackground?: boolean;
  text?: string;
}

export declare const OrderStatusBadge: (props: IOrderStatusBadge) => JSX.Element;
