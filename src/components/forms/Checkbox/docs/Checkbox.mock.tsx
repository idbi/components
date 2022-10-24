/* eslint-disable no-alert */
import { ICheckbox } from "../types";

const base: ICheckbox = {
  callbackOnChange: () => {},
  children: <>checkbox</>,
  disabled: false,
  value: "valor",
};

export const mockCheckboxProps = {
  base,
};
