export { DropdownOptions } from "../MultipleOptionsDropdown";

export interface IDropdownMenu {
  options: DropdownOptions;
  activator?: React.ReactNode;
}

export declare const DropdownMenu: (props: IDropdownMenu) => JSX.Element;
