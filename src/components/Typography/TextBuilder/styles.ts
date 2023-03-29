import { getSpacing, getTextAlign } from "@/theme/utils";
import { css } from "styled-components";
import { DefaultSizes, FontWeight, Size } from "@/components/Typography/utils";
import type {
  ITextBuilderProps,
  Tags,
  TColorNames,
  TColorScales,
} from "./types";

export const tagsMap: {
  [key: string]: Tags;
} = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  li: "li",
  span: "span",
  strong: "strong",
  label: "label",
};

export const baseStyles = css<ITextBuilderProps>`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align }) => getTextAlign({ align })}
  ${({ m, mb, mt, mr, ml, my, mx, p, pb, pt, pr, pl, py, px }) =>
    getSpacing({ m, mb, mt, mr, ml, my, mx, p, pb, pt, pr, pl, py, px })};
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

  return css<ITextBuilderProps>`
    font-weight: ${({ weight = defaultWeight }) => FontWeight[weight] || "500"};
    font-size: ${({ size = defaultSize }) => {
      return Size[size] || size;
    }};
    color: ${({ theme, color = defaultColor }) => {
      const colorName = color?.split("/")[0] as keyof TColorNames;
      const intensity = Number(color?.split("/")[1]) as keyof TColorScales;

      return theme.color[colorName][intensity];
    }};
  `;
};
