import { CSSProperties, ReactNode } from "react";
import { OrderStatusType } from "../../../types/OrderStatusType";

export interface ISectionCard {
  key?: string;
  title?: ReactNode;
  icon?: ReactNode;
  headerTop?: ReactNode;
  headerAside?: ReactNode;
  sections?: ReactNode[];
  children?: ReactNode;
  showBody?: boolean;
  containerStyle?: CSSProperties;
}

export declare const SectionCard: (props: ISectionCard) => JSX.Element;
