import { ReactNode } from "react";
import { OrderStatusType } from "../../../types/OrderStatusType";

export interface IItem {
  statusName: OrderStatusType;
  statusDate: string;
  description?: string;
}

export interface ICurrentStatusCard {
  title?: string;
  items: IItem[]
  creationDescription?: string;
  creationDate?: string;
  children?: ReactNode;
}

export declare const CurrentStatusCard: (props: ICurrentStatusCard) => JSX.Element;
