export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";
  shape?: "rounded" | "squared" | "circular";
  design?: "solid" | "outline" | "flat" | "link";
  color?: TColor;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export declare const Button: (props: IButton) => JSX.Element;
