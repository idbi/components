/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  options_base,
  options_withIcons,
  options_withSubOptions,
} from "@/components/dropdowns/DropdownMenu/DropdownMenu.mock";
import { IMultipleOptionsModal } from "./types";

const base: IMultipleOptionsModal = {
  onClose: () => {},
  options: options_base,
};

const withIcons: IMultipleOptionsModal = {
  onClose: () => {},
  options: options_withIcons,
  contentLocation: "center",
  contentLocationInDesktop: "left",
};

const withSubOptions: IMultipleOptionsModal = {
  onClose: () => {},
  options: options_withSubOptions,
  defaultDescription: "Seleccione la acción a realizar",
  contentLocation: "right",
  contentLocationInDesktop: "bottom",
};

export const mockMultipleOptionsModalProps = {
  base,
  withIcons,
  withSubOptions,
};
