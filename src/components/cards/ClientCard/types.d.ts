import { ReactNode } from "react";
import { OrderStatusType } from "../../../types/OrderStatusType";

export interface IClientCard {
  name: string;
  lastName?: string;
  img?: null | { src: string; srcSet?: string; alt?: string };
  idNumber?: string;
  otherSections?: ReactNode[];
  onDelete?: () => void;
}

export declare const ClientCard: (props: IClientCard) => JSX.Element;
