import { TextFieldProps } from "./types";

const base: TextFieldProps = {
  label: "Texto de prueba",
  placeholder: "Ingresa texto de prueba",
};

const error: TextFieldProps = {
  label: "Texto de prueba",
  error: "Esto es un error",
  placeholder: "Ingresa texto de prueba",
};

const success: TextFieldProps = {
  label: "Texto de prueba",
  defaultValue: "Texto válido",
  placeholder: "Ingresa texto de prueba",
  success: true,
};

const info: TextFieldProps = {
  label: "Texto de prueba",
  defaultValue: "El mensaje informativo aparece onFocus",
  placeholder: "Ingresa texto de prueba",
  infoMessage: "Esto es un mensaje de información",
};

export const mockTextFieldProps = {
  base,
  error,
  success,
  info,
};
