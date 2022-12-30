/* eslint-disable no-alert */
import { IBulletOptionsModal } from "../types";

const base: IBulletOptionsModal = {
  title: "Cambiar estado",
  onClose: () => {},
  onSelect: (value, selected) => {},
  selected: "first",
  options: [
    { value: "first", content: "A first option" },
    { value: "second", content: "A second option" },
    { value: "third", content: "A third option" },
  ],
};

const coloredOptions: IBulletOptionsModal = {
  title: "Cambiar estado",
  onClose: () => {},
  onSelect: (value, selected) => {},
  selected: "Aceptado",
  options: [
    { value: "Aceptado", content: "Aceptado", color: "#4318FF" },
    { value: "Preparando", content: "Preparando", color: "#F47B0A" },
    { value: "Preparado", content: "Preparado", color: "#FF82AF" },
    { value: "Enviado", content: "Enviado", color: "#5DDB92" },
  ],
};

const withDisabledOptions: IBulletOptionsModal = {
  title: "Cambiar estado",
  onClose: () => {},
  onSelect: (value, selected) => {},
  selected: "Aceptado",
  options: [
    { value: "Aceptado", content: "Aceptado", color: "#4318FF" },
    { value: "Preparando", content: "Preparando", color: "#F47B0A", disabled: true },
    { value: "Preparado", content: "Preparado", color: "#FF82AF", disabled: true },
    { value: "Enviado", content: "Enviado", color: "#5DDB92" },
  ],
};

export const mock = {
  base,
  coloredOptions,
  withDisabledOptions,
};
