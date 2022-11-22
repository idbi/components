import { DefaultTheme } from "styled-components";
import { tagsMap } from ".";
import { Size } from "../utils";

export interface ITextProps
  extends Omit<Partial<HTMLLabelElement>, "children">,
    Spacing {
  as?: Tags;
  weight?: "light" | "regular" | "medium" | "bold";
  size?: TSizes;
  color?: TColor;
  align?: "left" | "center" | "right";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  onKeyUpCapture?: (e: React.KeyboardEvent) => void;
}

export interface ITextBuilderProps extends ITextProps {
  as: Tags;
}

export type Tags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "li"
  | "span"
  | "strong"
  | "label";

export type TSizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export type TLevelHeading = 1 | 2 | 3 | 4 | 5 | 6;

export type TColorNames = Pick<
DefaultTheme["color"],
"NEUTRAL" | "PRIMARY" | "SECONDARY" | "TERTIARY" | "QUATERNARY" | "STATE" | "ALERT" | "SUCCESS"
>;

export type TColorScales = {
  [intensity in keyof TColorNames[keyof TColorNames]]: string;
};

export type TColor = `${keyof TColorNames}/${keyof TColorScales}`;

export declare const Heading = {
  H1: (props: ITextProps) => JSX.Element,
  H2: (props: ITextProps) => JSX.Element,
  H3: (props: ITextProps) => JSX.Element,
  H4: (props: ITextProps) => JSX.Element,
  H5: (props: ITextProps) => JSX.Element,
  H6: (props: ITextProps) => JSX.Element,
};

export declare const Text = (props: ITextProps) => JSX.Element;

export interface Spacing {
  p?: number | string;
  py?: number | string;
  px?: number | string;
  pt?: number | string;
  pb?: number | string;
  pr?: number | string;
  pl?: number | string;
  m?: number | string;
  mt?: number | string;
  mb?: number | string;
  mr?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
}
