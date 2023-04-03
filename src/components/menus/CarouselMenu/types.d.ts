import React from "react";

export interface ICarouselItemType {
  id: string;
  text: string;
}

export interface ICarouselItem {
  id: string;
  text: string;
  setIsSelected: (id: string) => void;
  isSelected?: boolean;
  model?: number;
  children?: React.ReactNode;
}

export interface ICarouselMenu {
  items: ICarouselItemType[] | [];
  setSelectedId?: (id: string) => void;
  selectedId?: string;
  loadingSelectedId?: boolean;
  children?: React.ReactNode;
  showArrows?: boolean;
}

export declare const CarouselMenu: (props: ICarouselMenu) => JSX.Element;
