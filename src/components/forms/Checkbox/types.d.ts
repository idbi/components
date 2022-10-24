import { InputHTMLAttributes } from "react";

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  callbackOnChange?: (value: string, isChecked: boolean) => void;
}

export declare const Checkbox: (props: ICheckbox) => JSX.Element;
