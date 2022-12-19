import React from "react";

export type IToastCardType = "success" | "warning" | "error" | "quaternary" | "tertiary" | "primary"

export interface IToastCard {
  title?: string
  description?: string | React.ReactNode
  icon?: React.ReactNode
  type?: IToastCardType
  link?: {
    text?: string
    onClick?: () => void
  }
}

export declare const ToastCard: (props: IToastCard) => JSX.Element;
