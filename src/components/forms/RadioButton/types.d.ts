import React, { InputHTMLAttributes } from "react";

export interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

export declare const RadioButton: (props: IRadioButton) => JSX.Element;
