import { DropdownOptions } from "@/components/dropdowns/MultipleOptionsDropdown";
import { IModalContainer } from "../ModalContainer/types";
import type { Spacing, TColor, TSizes } from "../Typography/TextBuilder/types";
import { CSSProperties } from "react";

export interface ICardModal extends IModalContainer {
  show?: boolean;
  padding?: string;
  borderRadius?: string;
  borderRadiusInDesktop?: string;
  maxHeight?: string;
  height?: string;
  maxWidth?: string;
  width?: string;
  overflow?: string;
  background?: string;
  closeIcon?: boolean;
  closeIconInDesktop?: boolean;
  boxShadow?: string;
  boxShadowInDesktop?: string;
  styleContainer?: CSSProperties;
}

export declare const CardModal: (props: ICardModal) => JSX.Element;
