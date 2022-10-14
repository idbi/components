import { MouseEvent } from "react";

export interface IBackdrop {
  onClose?: (e?: MouseEvent<HTMLElement>) => void;
  backdropOpacity?: number;
  zIndex?: number;
}

export declare const Backdrop: (props: IBackdrop) => JSX.Element;