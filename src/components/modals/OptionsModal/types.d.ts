import { ReactNode } from "react";
import { ICardModal } from "../CardModal/types";

export interface IModalOption {
  value: string;
  content: ReactNode;
  icon?: JSX.Element;
  disabled?: boolean;
}

export interface IOptionsModal {
  title: ReactNode;
  options: IModalOption[];
  selected: string;
  onSelect: (value: string, selected?: IModalOption) => void;
  onClose: () => void;
  modalProps?: Omit<ICardModal, "children">;
  optionMinHeight?: number;
}
