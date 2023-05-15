import React, { CSSProperties } from "react";
export type Model = "primary" | "secondary" | "tertiary";

export interface IButtonsSwitch {
  options: { label: string | React.ReactNode; value: string }[];
  selected: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  model?: Model;
  equalBtns?: boolean;
  style?: CSSProperties;
  styleButtons?:  CSSProperties;
}

export declare const ButtonsSwitch: (props: IButtonsSwitch) => JSX.Element;
