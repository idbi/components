import React from "react";

export interface IIcon {
  size?: number;
  color?: string;
  colorStroke?: string;
  onClick?: () => void;
  styleContainer?: React.CSSProperties;
}

export declare const IdiActivity: (props: IIcon) => JSX.Element;
export declare const IdiArrowBottom: (props: IIcon) => JSX.Element;
export declare const IdiArrowLeft: (props: IIcon) => JSX.Element;
export declare const IdiArrowRight: (props: IIcon) => JSX.Element;
export declare const IdiArrowTop: (props: IIcon) => JSX.Element;
export declare const IdiBell: (props: IIcon) => JSX.Element;
export declare const IdiKeyboardBackSpace: (props: IIcon) => JSX.Element;
export declare const IdiLogo: (props: IIcon) => JSX.Element;
export declare const IdiMenu: (props: IIcon) => JSX.Element;
export declare const IdiShopTable: (props: IIcon) => JSX.Element;
export declare const IdiUser: (props: IIcon) => JSX.Element;
