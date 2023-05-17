import React from "react";
import PhotoItem from "@/images/photo-item.svg";
import type { IProductItem } from "./types";
import * as s from "./styles";

export const ProductItem: React.FC<IProductItem> = ({ name, sku, img }) => {
  const validateElement = (element: any): element is JSX.Element => {
    return React.isValidElement(element);
  };

  return (
    <s.Container>
      {img !== false && (validateElement(img) ? img : <s.ItemImg src={img || PhotoItem} />)}
      <s.ItemData>
        {sku && (
          <div>
            <span>SKU</span>
            {sku}
          </div>
        )}
        {name}
      </s.ItemData>
    </s.Container>
  );
};
