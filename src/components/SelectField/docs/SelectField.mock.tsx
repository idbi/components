import { IconChecked } from "@/icons/IconChecked";
import { SelectFieldProps } from "../types";

const options = [
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
];

const defaultSelectField: SelectFieldProps = {
  onChange: () => {},
  options,
  isMulti: false,
  loading: false,
  firstOption: {
    label: "Seleccione una opción",
    value: "",
  },
  placeholder: "",
  initialValue: undefined,
  value: undefined,
};

const multiSelect: SelectFieldProps = {
  onChange: () => {},
  isMulti: true,
  options,
  firstOption: null,
  placeholder: "placeholder",
};

const customSelect: SelectFieldProps = {
  onChange: () => {},
  options,
  firstOption: null,
  placeholder: "placeholder",
  formatOptionLabel: (option) => {
    return (
      <div>
        <strong>$</strong> {option.value}
      </div>
    );
  },
};

export const mockSelectFieldProps = {
  defaultSelectField,
  multiSelect,
  customSelect,
};
