import { CSSProperties } from "react";

export interface OptionType {
  value: string;
  label: string;
}

export interface SelectProps {
  options: OptionType[];
  placeholder?: string;
  style?: CSSProperties;
  loading?: boolean;
  error?: string;
  firstOption?: OptionType;
  initialValue?: OptionType | OptionType[];
  onChange: (selectedOption: any) => void;
  value?: OptionType | OptionType[];
  isMulti?: boolean;
  formatOptionLabel?: (option: OptionType) => React.ReactElement;
}

export declare const SelectInput: (props: SelectProps) => JSX.Element;
