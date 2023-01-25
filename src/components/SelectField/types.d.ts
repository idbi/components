import { CSSProperties } from "react";

export interface OptionType {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  label?: string;
  placeholder?: string;
  style?: CSSProperties;
  loading?: boolean;
  firstOption?: OptionType | null;
  initialValue?: OptionType | OptionType[];
  value?: OptionType | OptionType[];
  isMulti?: boolean;
  options: OptionType[];
  onChange: (selectedOption: any) => void;
  formatOptionLabel?: (option: OptionType) => React.ReactElement;
}

export declare const SelectField: (props: SelectFieldProps) => JSX.Element;
