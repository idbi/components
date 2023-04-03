import { OrderStatusType } from "@/types/OrderStatusType";
import { OrderType } from "@/types/OrderType";
import React from "react";

export interface IOrderCard {
  title: string;
  spot?: string;
  time?: string;
  status?: OrderStatusType;
  seller?: string;
  isCourtesy?: boolean;
  total?: {
    symbol: string;
    amount: string | number;
  }
  hideNumClients?: boolean;
  numClients?: number;
  onClick?: () => void;
  children?: React.ReactNode;
  noHover?:boolean;
}

export declare const OrderCard: (props: IOrderCard) => JSX.Element;
