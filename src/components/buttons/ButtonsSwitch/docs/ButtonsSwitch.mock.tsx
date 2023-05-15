import { IdiBox } from "@/icons/IdiBox";
import { IButtonsSwitchContainer } from "./Container";

const options = [
  {
    label: (
      <>
        <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
      </>
    ),
    value: "ADD",
  },
  { label: "Detalles de la cotización", value: "DETAILS" },
  { label: "Otra opción", value: "OTHER" },
  { label: "Test", value: "TEST" },
];

const primary: IButtonsSwitchContainer = {
  model: "primary",
  disabled: false,
  fullWidth: false,
  equalBtns: false,
  options: options.slice(0, 2),
  style: {},
  styleButtons: {},
};

const primaryFullWidth: IButtonsSwitchContainer = {
  model: "primary",
  disabled: false,
  fullWidth: true,
  equalBtns: false,
  options: options.slice(0, 2),
};

const primaryMultipleOptions: IButtonsSwitchContainer = {
  model: "primary",
  disabled: false,
  fullWidth: true,
  equalBtns: false,
  options,
};

const primaryDisabled: IButtonsSwitchContainer = {
  model: "primary",
  fullWidth: true,
  disabled: true,
  equalBtns: false,
  options,
};

const secondary: IButtonsSwitchContainer = {
  model: "secondary",
  fullWidth: false,
  disabled: false,
  equalBtns: false,
  options: [
    { label: "S/", value: "PEN" },
    { label: "$", value: "USD" },
  ],
};

const secondaryMultipleOptions: IButtonsSwitchContainer = {
  model: "secondary",
  fullWidth: true,
  disabled: false,
  equalBtns: false,
  options,
};

const tertiary: IButtonsSwitchContainer = {
  model: "tertiary",
  fullWidth: false,
  disabled: false,
  equalBtns: false,
  options: options.slice(0, 2),
};

const tertiaryMultipleOptions: IButtonsSwitchContainer = {
  model: "tertiary",
  fullWidth: true,
  disabled: false,
  equalBtns: false,
  options,
};

export const mockConfirmationCardV2Props = {
  primary,
  primaryFullWidth,
  primaryMultipleOptions,
  primaryDisabled,
  secondary,
  secondaryMultipleOptions,
  tertiary,
  tertiaryMultipleOptions,
};
