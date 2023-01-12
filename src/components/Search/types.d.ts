import React from "react";

export interface IFoundItems {
  show?: boolean;
  data?: any[];
  onSelectItem?: {
    onSelect: (data: any) => void;
    hideOnSelect: boolean;
  };
  getLabel?: (item: any) => any;
  containerStyle?: CSSProperties;
  hideOnBlur?: boolean;
  enableScannerBehavior?: boolean;
  addCreateOption?: {
    show?: boolean;
    location?: "top" | "bottom";
    text?: string;
    onCreate?: (value: string) => void;
  }
}

export type TSearchSize = "small" | "big" | number;

export interface ISearch {
  onSearch: (value: string) => Promise<void> | void;
  initSearch?: string;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  addSearchIcon?: boolean;
  addCleanOption?: boolean;
  size?: TSearchSize;
  delay?: number;
  alert?: boolean;
  foundItems?: IFoundItems;
}

export declare const Search: (props: ISearch) => JSX.Element;
