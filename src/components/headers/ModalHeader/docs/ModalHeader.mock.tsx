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
  options: {
    options: [options[0]],
    minWidth: "100px",
    padding: "15px",
  },
  closeIcon: {
    marginLeft: "15px",
    hide: false,
    onClick: () => {},
  },
  container: {
    marginBottom: "0px",
    zIndex: 5,
    isSticky: true,
  },
};

const variant: IModalHeader = {
  options: {
    options: [options[1]],
    minWidth: "100px",
    padding: "15px",
  },
  closeIcon: {
    marginLeft: "15px",
    hide: false,
    onClick: () => {},
  },
  container: {
    marginBottom: "0px",
    zIndex: 5,
    isSticky: false,
  },
};

const variant2: IModalHeader = {
  options: {
    options,
    minWidth: "100px",
    padding: "15px",
  },
  closeIcon: {
    marginLeft: "15px",
    hide: false,
    onClick: () => {},
  },
  container: {
    marginBottom: "0px",
    zIndex: 5,
    isSticky: false,
  },
};

export const mockModalHeaderProps = {
  base,
  variant,
  variant2,
};
