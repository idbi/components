import { ReactNode } from "react";
export { DropdownOptions } from "../MultipleOptionsDropdown";

export interface IDropdownMenu {
  header?: ReactNode;
  options: DropdownOptions;
  activator?: React.ReactNode;
}

export declare const DropdownMenu: (props: IDropdownMenu) => JSX.Element;
