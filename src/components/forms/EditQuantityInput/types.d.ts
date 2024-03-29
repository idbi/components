import { CSSProperties, ReactNode } from "react";

type ChangeType = "INCREMENT" | "DECREMENT" | "UPDATE";

export interface IEditQuantityInput {
  value: number | string | null;
  onSetQuantity: (value: number, type?: ChangeType) => void;
  onDelete?: () => void;
  measureUnit?: ReactNode;
  minimumQuantity?: number;
  maximumQuantity?: number | null;
  onlyIntegers?: boolean;
  blockInputModal?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  variant?: "base" | "card";
  renderModal?: (modal: JSX.Element) => JSX.Element;
  style?: CSSProperties;
  styleContainer?: CSSProperties;
  zIndex?: number;
  noDecrement?: boolean;
  noIncrement?: boolean;
}

declare const EditQuantityInput: (props: IEditQuantityInput) => JSX.Element;
