/* eslint-disable no-console */
import { ICheckbox } from "../types";

const base: ICheckbox = {
  callbackOnChange: (val, checked) => console.log({ val, checked }),
  children: <>checkbox</>,
  disabled: false,
  value: "valor",
};

export const mockCheckboxProps = {
  base,
};
