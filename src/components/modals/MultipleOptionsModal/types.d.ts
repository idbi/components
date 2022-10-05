import { DropdownOptions } from "@/components/dropdowns/MultipleOptionsDropdown";
import type { Spacing, TColor, TSizes } from "../Typography/TextBuilder/types";

export interface IMultipleOptionsModal {
  options: DropdownOptions;
  onClose: () => void;
  contentLocation?: "bottom" | "top" | "left" | "right" | "center";
  contentLocationInDesktop?: "bottom" | "top" | "left" | "right" | "center";
  defaultDescription?: string;
  defaultTitle?: string;
  optionsInCenter?: boolean;
}

export declare const MultipleOptionsModal: (props: IMultipleOptionsModal) => JSX.Element;
