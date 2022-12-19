import React from "react";

export interface IOption {
  id?: string;
  text: string | React.ReactNode;
  onClick: (...params: any) => void
  disabled?: boolean;
  color?: string;
  mode?: "normal" | "danger" | string;
}

export interface IModalHeader {
  container: {
    marginBottom?: string;
    padding?: string;
    isSticky?: boolean;
    zIndex?: number;
  }
  options: {
    options: IOption[];
    minWidth?: string;
    padding?: string;
  }
  closeIcon: {
    onClick: (...params: any) => void
    hide?: boolean;
    marginLeft: string;
  }
}

export declare const ModalHeader: (props: IModalHeader) => JSX.Element;
