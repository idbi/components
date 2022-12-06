import { ISupplyInput } from "../types";

const base: ISupplyInput = {
  placeholder: "placeholder",
  suffix: "L",
  readingMode: false,
};

const variant1: ISupplyInput = {
  suffix: "L",
  value: "10",
  defaultValue: "10",
  description: "Cantidad a producir",
  readingMode: false,
};

const variant2: ISupplyInput = {
  suffix: "L",
  value: "10",
  defaultValue: "10",
  description: "Cantidad a producir",
  readingMode: true,
};

const variant3: ISupplyInput = {
  suffix: "L",
  value: "10",
  defaultValue: "10",
  description: "Cantidad a producir",
  readingMode: false,
  disabled: true,
};

export const mockSupplyInputProps = {
  base,
  variant1,
  variant2,
  variant3,
};
