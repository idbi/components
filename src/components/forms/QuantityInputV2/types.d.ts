interface btnOptions {
  disabled?: boolean;
  available?: boolean;
}

export interface IQuantityInputV2 {
  quantity: number;
  onChange: (quantity: number) => void;
  icon?: JSX.Element;
  fullWidth?: boolean;
  increase?: btnOptions;
  decrease?: btnOptions;
}

declare const QuantityInputV2: (props: IQuantityInputV2) => JSX.Element;
