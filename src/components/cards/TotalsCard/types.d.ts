import { ReactNode } from "react";

export interface IItem {
  uuid?: string;
  description: string;
  amount: number;
  currency: string;
  quantity?: number;
  remark?: boolean;
  decorators?: ReactNode;
  notes?: string[];
  img?: string;
}

export interface ITotalsCard {
  title?: string;
  actionName?: string;
  onAction?: () => void;
  items: IItem[];
  hideQuantity?: boolean;
  gap?: number;
  background?: string;
  padding?: string;
  children?: ReactNode;
}

export declare const TotalsCard: (props: ITotalsCard) => JSX.Element;
