import React from "react";

export interface IProductItem {
  name: string;
  sku?: string;
  img?: string | JSX.Element | null | false;
}

export declare const ProductItem: (props: IProductItem) => JSX.Element;
