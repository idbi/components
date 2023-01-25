import { ReactNode } from "react";
import { OrderStatusType } from "../../../types/OrderStatusType";

export interface IClientCard {
  name: string;
  lastName?: string;
  img?: null | { src: string; srcSet?: string; alt?: string };
  idNumber?: ReactNode;
  otherSections?: ReactNode[];
  aside?: ReactNode;
}

export declare const ClientCard: (props: IClientCard) => JSX.Element;
