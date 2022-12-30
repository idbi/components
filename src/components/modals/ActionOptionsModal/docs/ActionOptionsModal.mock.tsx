/* eslint-disable no-alert */
import { CheckIcon } from "@/icons-v2/CheckIcon";
import { IdentificationIcon } from "@/icons-v2/IdentificationIcon";
import { IActionOptionsModal } from "../types";

const handleClick = () => alert("triggered action");

const base: IActionOptionsModal = {
  title: "Opciones adicionales",
  onClose: () => {},
  options: [
    { content: "A first option", onClick: handleClick },
    { content: "A second option", onClick: handleClick },
    { content: "A third option", onClick: handleClick },
  ],
};

const withIcons: IActionOptionsModal = {
  title: "Opciones adicionales",
  onClose: () => {},
  options: [
    { content: "A first option", onClick: handleClick, icon: <CheckIcon /> },
    { content: "A second option", onClick: handleClick, icon: <IdentificationIcon /> },
    { content: "A third option", onClick: handleClick },
  ],
};

const closeOnAction: IActionOptionsModal = {
  title: "Opciones adicionales",
  onClose: () => {},
  options: [
    { content: "A first option", onClick: handleClick, icon: <CheckIcon /> },
    { content: "A second option", onClick: handleClick, icon: <IdentificationIcon /> },
    { content: "A third option", onClick: handleClick },
  ],
  closeOnAction: true,
};

// const coloredOptions: IBulletOptionsModal = {
//   title: "Cambiar estado",
//   onClose: () => {},
//   onSelect: (value, selected) => {},
//   selected: "Aceptado",
//   options: [
//     { value: "Aceptado", content: "Aceptado", color: "#4318FF" },
//     { value: "Preparando", content: "Preparando", color: "#F47B0A" },
//     { value: "Preparado", content: "Preparado", color: "#FF82AF" },
//     { value: "Enviado", content: "Enviado", color: "#5DDB92" },
//   ],
// };

// const withDisabledOptions: IBulletOptionsModal = {
//   title: "Cambiar estado",
//   onClose: () => {},
//   onSelect: (value, selected) => {},
//   selected: "Aceptado",
//   options: [
//     { value: "Aceptado", content: "Aceptado", color: "#4318FF" },
//     { value: "Preparando", content: "Preparando", color: "#F47B0A", disabled: true },
//     { value: "Preparado", content: "Preparado", color: "#FF82AF", disabled: true },
//     { value: "Enviado", content: "Enviado", color: "#5DDB92" },
//   ],
// };

export const mock = {
  base,
  withIcons,
  closeOnAction,
};
