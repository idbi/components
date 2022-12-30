import { ReactNode } from "react";
import { ICardModal } from "../CardModal/types";
import { IModalOption, IOptionsModal } from "../OptionsModal/types";

interface IOption {
  content: ReactNode;
  icon?: JSX.Element;
  onClick: () => void;
  disabled?: boolean;
}

export type IActionOptionsModal = {
  title: ReactNode;
  options: IOption[];
  closeOnAction?: boolean;
  onClose: () => void;
  modalProps?: Omit<ICardModal, "children">;
};

export declare const ActionOptionsModal: (props: IActionOptionsModal) => JSX.Element;
