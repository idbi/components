import { ReactNode } from "react";

export interface IOption {
  content: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export interface IConfirmationCardV3 {
  title: string;
  content?: ReactNode;
  options: (IOption & { type?: "primary" | "secondary" })[];
  cancelOptions: IOption[];
}

export declare const ConfirmationCardV3: (
  props: IConfirmationCardV3
) => JSX.Element;
