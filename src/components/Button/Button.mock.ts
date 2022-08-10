import { IButton } from ".";

const base: IButton = {
  full: false,
  noBorder: false,
  model: "primary",
  rounded: true,
  size: "big",
  children: "Hello world!",
};

export const mockButtonProps = {
  base,
};
