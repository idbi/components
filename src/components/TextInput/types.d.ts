import { InputHTMLAttributes } from "react";
import { TSizes } from "../Typography/TextBuilder/types";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  placeholder?: string;
  fullWidth?: boolean;
  size?: TSizes;
  error?: boolean;
  success?: boolean;
}

export declare const TextInput: (props: InputProps) => JSX.Element;
