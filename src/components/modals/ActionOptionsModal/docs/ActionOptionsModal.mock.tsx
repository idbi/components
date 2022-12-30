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

export const mock = {
  base,
  withIcons,
  closeOnAction,
};
