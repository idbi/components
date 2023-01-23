/* eslint-disable no-alert */
import { IButtonsSwitchContainer } from "./Container";

const primary: IButtonsSwitchContainer = {
  options: [
    { label: "Agregar productos", value: "ADD" },
    { label: "Detalles de la cotización", value: "DETAILS" },
  ],
};

const primaryFullWidth: IButtonsSwitchContainer = {
  fullWidth: true,
  options: [
    { label: "Agregar productos", value: "ADD" },
    { label: "Detalles de la cotización", value: "DETAILS" },
  ],
};

const primaryMultipleOptions: IButtonsSwitchContainer = {
  fullWidth: true,
  options: [
    { label: "Agregar productos", value: "ADD" },
    { label: "Detalles de la cotización", value: "DETAILS" },
    { label: "Otra opción", value: "OTHER" },
    { label: "Test", value: "TEST" },
  ],
};

const primaryDisabled: IButtonsSwitchContainer = {
  fullWidth: true,
  disabled: true,
  options: [
    { label: "Agregar productos", value: "ADD" },
    { label: "Detalles de la cotización", value: "DETAILS" },
    { label: "Otra opción", value: "OTHER" },
    { label: "Test", value: "TEST" },
  ],
};

const secondary: IButtonsSwitchContainer = {
  options: [
    { label: "S/", value: "PEN" },
    { label: "$", value: "USD" },
  ],
  model: "secondary",
};

const secondaryMultipleOptions: IButtonsSwitchContainer = {
  fullWidth: true,
  options: [
    { label: "Agregar productos", value: "ADD" },
    { label: "Detalles de la cotización", value: "DETAILS" },
    { label: "Otra opción", value: "OTHER" },
    { label: "Test", value: "TEST" },
  ],
  model: "secondary",
};

const tertiary: IButtonsSwitchContainer = {
  model: "tertiary",
  options: [
    { label: "Agregar productos", value: "ADD" },
    { label: "Detalles de la cotización", value: "DETAILS" },
  ],
};

const tertiaryMultipleOptions: IButtonsSwitchContainer = {
  model: "tertiary",
  options: [
    { label: "Agregar productos", value: "ADD" },
    { label: "Detalles de la cotización", value: "DETAILS" },
    { label: "Otra opción", value: "OTHER" },
    { label: "Test", value: "TEST" },
  ],
  fullWidth: true,
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
