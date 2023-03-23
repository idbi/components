import React, { useState } from "react";
import { CarouselMenu as CarouselMenuComponent } from "..";
import { ICarouselMenu } from "../types";

export const CarouselMenu = (props: ICarouselMenu) => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <CarouselMenuComponent
      {...props}
      selectedId={selectedId}
      setSelectedId={(id) => setSelectedId(id)}
    />
  );
};
