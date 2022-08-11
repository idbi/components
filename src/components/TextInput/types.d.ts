import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  placeholder?: string;
  // isDirty?: boolean;
  // invalid?: boolean;
  error?: boolean;
  success?: boolean;
}

export declare const TextInput: (props: InputProps) => JSX.Element;
