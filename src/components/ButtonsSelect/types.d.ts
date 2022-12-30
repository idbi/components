import { ReactNode } from "react";

interface IOption {
  content: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface IButtonsSelect {
  title?: ReactNode;
  options: IOption[];
  selected: string;
  onSelect: (value: string, selected?: IOption) => void;
}

export declare const ButtonsSelect: (props: IButtonsSelect) => JSX.Element;
