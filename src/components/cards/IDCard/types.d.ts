import React from "react";

export interface IIDCard {
  type?: string
  id: string
  name: {
    text: string
    weight?: "medium" | "bold"
  }
  decorator?: {
   component?: React.ReactNode
   padding?: string 
  }
  img?: {
    url: string
  }
}

export declare const IDCard: (props: IIDCard) => JSX.Element;
