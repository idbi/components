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
