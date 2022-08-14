import { InputProps } from "../TextInput/types";

export interface TextFieldProps extends Omit<InputProps, "error"> {
  label?: string;
  errorMessage?: string;
}

export declare const TextField: (props: TextFieldProps) => JSX.Element;
