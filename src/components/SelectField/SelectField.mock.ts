import { SelectFieldProps } from "./types";

const base: SelectFieldProps = {
  onChange: () => {},
  options: [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
    {
      label: "Option 3",
      value: "option3",
    },
  ],
};

export const mockSelectFieldProps = {
  base,
};
