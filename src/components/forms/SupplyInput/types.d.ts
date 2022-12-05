import React, { InputHTMLAttributes } from "react";

export interface ISupplyInput extends InputHTMLAttributes<HTMLInputElement> {
  description?: string
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  suffix?: React.ReactNode
  disabled?: boolean
  readingMode?: boolean
}

export declare const SupplyInput: (props: ISupplyInput) => JSX.Element;
