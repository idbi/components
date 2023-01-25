import React from "react";
import { ISearch } from "../Search/types";

export interface IOption {
  text: string;
  onClick: () => void;
}

export interface IMainOption extends IOption {
  key: string;
}

export interface INavbarPrivateOption {
  option: IMainOption;
  subOptions?: IOption[];
  onClose: () => void;
}

export interface INavbarOption {
  option: IMainOption;
  subOptions?: IOption[];
}

export interface ISearchForNavbar extends ISearch{
  show: boolean;
}

export interface INavbar {
  zIndex?: number;
  isSticky?: boolean;
  options?: INavbarOption[];
  links?: IOption[];
  userIcon?: {
    show: boolean;
    onClick?: () => void;
    img?: null | IUserImg;
    initials: string;
    size?: number;
    name?: string;
    note?: string;
  }
  searchOption?: ISearchForNavbar;
  logoIcon?: {
    onClick: () => void;
  }
  bellIcon?: {
    show: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }
}

export declare const Navbar: (props: INavbar) => JSX.Element;
