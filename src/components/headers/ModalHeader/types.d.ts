import React from "react";

export interface IOption {
  id?: string;
  text: string | React.ReactNode;
  onClick(...params: any): any;
  disabled?: boolean;
  color?: string;
  mode?: "normal" | "danger" | string;
}

export interface IModalHeader {
  options: IOption[];
  minWidthForOptions?: string;
  paddingForOptions?: string;
  hideCloseIcon?: boolean;
  marginLeftForCloseIcon?: string;
}

export declare const ModalHeader: (props: IModalHeader) => JSX.Element;
