import { DefaultTheme } from "styled-components";

export interface ITextProps extends Omit<Partial<HTMLLabelElement>, "children">  {
  as?: keyof typeof tagsMap;
  weight?: "light" | "regular" | "medium" | "bold";
  size?: keyof typeof Size;
  color?: `${keyof TColorNames}/${keyof TColorScales}`;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export interface ITextBuilderProps {
  as: keyof typeof tagsMap 
}

export enum FontWeight {
  bold = 700,
  medium = 500,
  regular = 400,
  light = 300,
}

export enum Size {
  xs = "0.750em",
  sm = "0.875em	",
  md = "1.0em",
  lg = "1.250em",
  xl = "1.5em",
  xxl = "2.0em",
}

export enum DefaultSizes {
  h1 = "xl",
  h2 = "lg",
  h3 = "md",
  h4 = "sm",
  h5 = "xs",
  h6 = "xs",
  text = "md",
}

export type TLevelHeading = 1 | 2 | 3 | 4 | 5 | 6;

export const tagsMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  strong: "strong",
  label: "label",
} as const;

export type TColorNames = Pick<
  DefaultTheme["color"],
  "NEUTRAL" | "PRIMARY" | "SECONDARY" | "TERTIARY" | "QUATERNARY" | "STATE" | "ALERT" | "SUCCESS"
>;

export type TColorScales = {
  [intensity in keyof TColorNames[keyof TColorNames]]: string;
};
