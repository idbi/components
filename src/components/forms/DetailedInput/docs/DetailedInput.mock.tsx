import { IDetailedInput } from "../types";

const base: IDetailedInput = {
  label: "Costo unitario",
  aside: "S/",
  inputProps: { id: "input-id-1", type: "number", onChange: () => {} },
};

const extraInputProps: IDetailedInput = {
  label: "Costo unitario",
  aside: "S/",
  inputProps: { id: "input-id-2", onChange: () => {}, type: "number", placeholder: "0.00", defaultValue: "5.00" },
};

const inputRight: IDetailedInput = {
  label: "Costo unitario",
  aside: "S/",
  contentRight: true,
  inputProps: { id: "input-id-3", onChange: () => {}, type: "number", placeholder: "0.00", defaultValue: "5.00" },
};

const noAside: IDetailedInput = {
  label: "Costo unitario",
  contentRight: true,
  inputProps: { id: "input-id-4", onChange: () => {}, type: "number", placeholder: "0.00", defaultValue: "5.00" },
};

export const mockDetailedInputProps = {
  base,
  extraInputProps,
  inputRight,
  noAside,
};
