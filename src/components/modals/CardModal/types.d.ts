import { DropdownOptions } from "@/components/dropdowns/MultipleOptionsDropdown";
import { IModalContainer } from "../ModalContainer/types";
import type { Spacing, TColor, TSizes } from "../Typography/TextBuilder/types";

export interface ICardModal extends IModalContainer {
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
}

export declare const CardModal: (props: ICardModal) => JSX.Element;
