import React from "react";
import { Button } from "./styles";
import { ICarouselItem } from "../types";

export const CarouselItem: React.FC<ICarouselItem> = ({
  id,
  text,
  setIsSelected,
  isSelected = false,
  children,
  model,
}) => {
  return (
    <Button
      id={id}
      isSelected={isSelected}
      onClick={() => {
        setIsSelected(id);
      }}
      model={model}
    >
      {text}
      {children}
    </Button>
  );
};
