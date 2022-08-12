import { DefaultTheme } from "styled-components";
import { tagsMap } from ".";
import { Size } from "../utils";

export interface ITextProps
  extends Omit<Partial<HTMLLabelElement>, "children"> {
  as?: Tags;
  weight?: "light" | "regular" | "medium" | "bold";
  size?: TSizes;
  color?: TColor;
  align?: "left" | "center" | "right";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
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
  | "span"
  | "strong"
  | "label";

export type TSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TLevelHeading = 1 | 2 | 3 | 4 | 5 | 6;

export type TColorNames = DefaultTheme["color"];

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
