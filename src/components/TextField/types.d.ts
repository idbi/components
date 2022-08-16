import { InputProps } from "../TextInput/types";

export interface TextFieldProps extends InputProps {
  label?: string;
  error?: string;
  isDirty?: boolean;
}

export declare const TextField: (props: TextFieldProps) => JSX.Element;
