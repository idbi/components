import { CSSProperties, ReactNode } from "react";
import { OrderStatusType } from "../../../types/OrderStatusType";

export interface ISectionCard {
  key?: string;
  title?: ReactNode;
  icon?: ReactNode;
  headerAside?: ReactNode;
  children?: ReactNode;
  sections?: ReactNode[];
  showBody?: boolean;
  containerStyle?: CSSProperties;
}

export declare const SectionCard: (props: ISectionCard) => JSX.Element;
