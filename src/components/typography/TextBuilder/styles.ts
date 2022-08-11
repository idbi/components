import { css } from "styled-components";
import {
  DefaultSizes,
  FontWeight,
  ITextProps,
  Size,
  tagsMap,
  TColorNames,
  TColorScales,
} from "./types";

export const baseStyles = css`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
`;

export const customStyles = (type: keyof typeof tagsMap) => {
  // use regex h1, h2, h3, h4, h5, h6
  const isHeading =
    type === "h1" ||
    type === "h2" ||
    type === "h3" ||
    type === "h4" ||
    type === "h5" ||
    type === "h6";
  const defaultWeight = isHeading ? "bold" : "medium";
  const defaultSize = isHeading ? DefaultSizes[type] : DefaultSizes.text;
  const defaultColor = "PRIMARY/900";

  return css<ITextProps>`
    font-weight: ${({ weight = defaultWeight }) => FontWeight[weight] || "500"};
    font-size: ${({ size = defaultSize }) => {
      return Size[size] || size;
    }};
    color: ${({ theme, color = defaultColor }) => {
      const colorName = color?.split("/")[0] as keyof TColorNames;
      const intensity = +color?.split("/")[1] as keyof TColorScales;

      return theme.color[colorName][intensity];
    }};
  `;
};
