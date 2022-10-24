import { InputHTMLAttributes } from "react";

interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}
export declare const Radio: (props: IRadio) => JSX.Element;
