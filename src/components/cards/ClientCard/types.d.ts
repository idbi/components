import { ReactNode } from "react";
import { OrderStatusType } from "../../../types/OrderStatusType";

export interface IClientCard {
  name: string;
  img?: null | { src: string; srcSet?: string; alt?: string };
  idNumber?: string;
  otherSections?: ReactNode[];
}

export declare const ClientCard: (props: IClientCard) => JSX.Element;
