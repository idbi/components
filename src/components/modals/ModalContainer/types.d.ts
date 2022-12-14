import { MouseEvent, ReactNode } from "react";
import { IBackdrop } from "./Backdrop/types";

export interface IModalContainer extends IBackdrop {
  children: ReactNode;
  contentLocation?: "bottom" | "top" | "left" | "right" | "center";
  contentLocationInDesktop?: "bottom" | "top" | "left" | "right" | "center";
  boxShadow?: string;
  boxShadowInDesktop?: string;
  fullWidth?: boolean;
}

export declare const ModalContainer: (props: IModalContainer) => JSX.Element;