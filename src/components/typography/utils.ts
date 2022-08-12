import { TSizes } from "./TextBuilder/types";

export const FontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300,
};

export const Size = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  xxl: "2.0rem",
};

export const DefaultSizes: {
  [key: string]: TSizes;
} = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "md",
};
