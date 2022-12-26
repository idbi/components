export interface IQuantityInputV2 {
  quantity: number;
  onChange: (quantity: number) => void;
  icon?: JSX.Element;
  canIncrease?: boolean;
  canDecrease?: boolean;
}
