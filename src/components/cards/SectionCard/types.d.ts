import { ReactNode } from "react";
import { OrderStatusType } from "../../../types/OrderStatusType";

export interface ISectionCard {
  title: string | JSX.Element;
  icon?: ReactNode;
  headerAside?: ReactNode;
  children?: ReactNode;
  sections?: ReactNode[];
}

export declare const SectionCard: (props: ISectionCard) => JSX.Element;
