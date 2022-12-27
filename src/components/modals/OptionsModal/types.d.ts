import { ReactNode } from "react";
import { ICardModal } from "../CardModal/types";

interface IOption {
  value: string;
  content: ReactNode;
  icon?: JSX.Element;
  disabled?: boolean;
}

export interface IOptionsModal {
  title: ReactNode;
  options: IOption[];
  selected: string;
  onSelect: (value: string, selected?: IOption) => void;
  onClose: () => void;
  modalProps?: Omit<ICardModal, "children">;
  optionMinHeight?: number;
}
