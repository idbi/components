import { Spacing, TColor, TSizes } from "../Typography/TextBuilder/types";

export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Spacing {
  as?: "button" | "a" | React.ElementType;
  to?: string;
  shape?: "rounded" | "squared" | "circular";
  design?: "solid" | "outline" | "flat" | "link";
  color?: TColor;
  size?: TSizes;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export declare const Button: (props: IButton) => JSX.Element;
