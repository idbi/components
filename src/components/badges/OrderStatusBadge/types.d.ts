import { ReactNode } from "react";

export type StatusType = "default" | "draft" | "pending" | "rejected" | "accepted" | "canceled" | "preparing" | "readyforpickup" | "delivered" | "finished";

export interface IOrderStatusBadge {
  statusName: StatusType;
  removeBackground?: boolean;
  text?: string;
}

export declare const OrderStatusBadge: (props: IOrderStatusBadge) => JSX.Element;
