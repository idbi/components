import { ReactNode } from "react";

export type StatusType = "default" | "draft" | "pending" | "rejected" | "accepted" | "canceled" | "preparing" | "readyforpickup" | "delivered";

export interface IOrderStatusBadge {
  statusName: StatusType;
}

export declare const OrderStatusBadge: (props: IOrderStatusBadge) => JSX.Element;
