import React from "react";

export type OrderType =  {
  uuid: string;
  slug: "delivery" | "pick-up" | "on-room" | "on-table";
}

export interface IOrderTypeHeader {
  types: OrderType[]
  onClick?: (typeUuid: string) => void;
  activeTypeUuid?: string;
}

export declare const OrderTypeHeader: (props: IOrderTypeHeader) => JSX.Element;
