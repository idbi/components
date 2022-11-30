/* eslint-disable no-alert */
import { IModalHeader } from "../types";

const options = [
  {
    text: "Anular",
    onClick: () => alert("anular"),
    disabled: false,
    mode: "danger",
  },
  {
    text: "Cancelar",
    onClick: () => alert("crear"),
    disabled: false,
    mode: "normal",
  },
];

const base: IModalHeader = {
  options: [options[0]],
};

const variant: IModalHeader = {
  options: [options[1]],
  hideCloseIcon: true,
};

const variant2: IModalHeader = {
  options,
};

export const mockModalHeaderProps = {
  base,
  variant,
  variant2,
};
