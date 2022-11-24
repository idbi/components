import { IConfirmationCardV3 } from "../../confirmations/ConfirmationCardV3/types";
import { ReactNode } from "react";
import { ICardModal } from "../CardModal/types";

export type IConfirmationModalV3 = IConfirmationCardV3 & { cardProps?: Partial<ICardModal> };

export declare const ConfirmationModalV3: (props: IConfirmationModalV3) => JSX.Element;
