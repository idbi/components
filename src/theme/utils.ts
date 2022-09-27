import { css } from "styled-components";
import {
  ITextBuilderProps,
  Spacing,
  TColor,
} from "@/components/Typography/TextBuilder/types";
import { IButton } from "@/components/Button/types";
import { Size } from "@/components/Typography/utils";
import { theme } from ".";

export const getShape = ({ shape }: Pick<IButton, "shape">) => {
  switch (shape) {
    case "rounded":
      return css`
        border-radius: 0.625rem;
      `;
    case "squared":
      return css`
        border-radius: 0;
      `;
    case "circular":
      return css`
        border-radius: 10rem;
      `;
    default:
      return css`
        border-radius: 0.625rem;
      `;
  }
};

export const getDesign = ({
  design,
  color,
}: Pick<IButton, "design" | "color">) => {
  switch (design) {
    case "solid":
      return css`
        background-color: ${() => getColor({ color })};
        color: #fff;
      `;
    case "outline":
      return css`
        background-color: white;
        border: 1px solid ${() => getColor({ color })};
        color: ${() => getColor({ color })};
      `;
    case "flat":
      return css`
        background-color: white;
        border: none;
        color: ${() => getColor({ color })};
      `;

    case "link": {
      return css`
        background-color: transparent;
        border: none;
        color: ${() => getColor({ color })};

        &:hover {
          color: ${() => getColor({ color, hover: true })};
          text-decoration: underline;
        }
      `;
    }
    default:
      return css`
        background-color: ${() => getColor({ color })};
        color: #fff;
      `;
  }
};

export const getColor = ({
  color = "SECONDARY/900",
  design,
  hover,
}: {
  design?: "solid" | "outline" | "flat" | "link";
  color?: TColor;
  hover?: boolean;
}) => {
  const colorSplitted = color.split("/");
  const colorName = colorSplitted[0];
  let colorScale = +colorSplitted[1];

  if (hover && colorScale >= 300) {
    switch (design) {
      case "solid":
        colorScale -= 100;
        break;
      case "outline":
        colorScale = 100;
        break;
      case "flat":
        colorScale = 100;
        break;
      default:
        if (colorScale >= 400) {
          colorScale -= 100;
        } else {
          colorScale += 100;
        }
        break;
    }
  }

  if (hover && colorScale < 300) {
    switch (design) {
      case "solid":
        colorScale += 100;
        break;
      case "outline":
        colorScale = 100;
        break;
      case "flat":
        colorScale = 100;
        break;
      default:
        colorScale -= 100;
        break;
    }
  }

  if (
    colorName === "PRIMARY" ||
    colorName === "NEUTRAL" ||
    colorName === "SECONDARY" ||
    colorName === "TERTIARY" ||
    colorName === "QUATERNARY" ||
    colorName === "STATE" ||
    colorName === "ALERT" ||
    colorName === "SUCCESS"
  ) {
    if (
      colorScale === 50 ||
      colorScale === 100 ||
      colorScale === 200 ||
      colorScale === 300 ||
      colorScale === 400 ||
      colorScale === 500 ||
      colorScale === 600 ||
      colorScale === 700 ||
      colorScale === 800 ||
      colorScale === 900
    ) {
      return theme.color[colorName][colorScale];
    }

    return theme.color[colorName][900];
  }
  return theme.color.PRIMARY[900];
};

export const getShape = ({ shape }: Pick<IButton, "shape">) => {
  switch (shape) {
    case "rounded":
      return css`
        border-radius: 0.625rem;
      `;
    case "squared":
      return css`
        border-radius: 0;
      `;
    case "circular":
      return css`
        border-radius: 10rem;
      `;
    default:
      return css`
        border-radius: 0.625rem;
      `;
  }
};

export const getDesign = ({
  design,
  color,
}: Pick<IButton, "design" | "color">) => {
  switch (design) {
    case "solid":
      return css`
        background-color: ${({ theme }) => getColor({ theme, color })};
        color: #fff;
      `;
    case "outline":
      return css`
        background-color: white;
        border: 1px solid ${({ theme }) => getColor({ theme, color })};
        color: ${({ theme }) => getColor({ theme, color })};
      `;
    case "flat":
      return css`
        background-color: white;
        border: none;
        color: ${({ theme }) => getColor({ theme, color })};
      `;

    case "link": {
      return css`
        background-color: transparent;
        border: none;
        color: ${({ theme }) => getColor({ theme, color })};

        &:hover {
          color: ${({ theme }) => getColor({ theme, color, hover: true })};
          text-decoration: underline;
        }
      `;
    }
    default:
      return css`
        background-color: ${({ theme }) => getColor({ theme, color })};
        color: #fff;
      `;
  }
};

export const getFullWidth = ({ fullWidth }: Pick<IButton, "fullWidth">) => {
  if (fullWidth) {
    return css`
      width: 100%;
    `;
  }
  return css`
    width: auto;
  `;
};

export const getIsLoading = ({ isLoading }: Pick<IButton, "isLoading">) => {
  if (isLoading) {
    return css`
      cursor: not-allowed;
      opacity: 0.5;
    `;
  }
  return css`
    cursor: pointer;
    opacity: 1;
  `;
};

export const getDisabled = ({ disabled }: Pick<IButton, "disabled">) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      opacity: 0.5;
    `;
  }
  return css`
    cursor: pointer;
    opacity: 1;
  `;
};

export const getSize = ({ size = "sm" }: Pick<IButton, "size">) => {
  return css`
    font-size: ${Size[size] || size};
  `;
};

export const getTextAlign = ({ align }: Pick<ITextBuilderProps, "align">) => {
  if (align)
    return css`
      text-align: ${align};
    `;
  return css`
    text-align: left;
  `;
};

// TODO: Get Spacing: mb, mt, ml, mr, pb, pt, pl, pr

export const getSpacing = (props: Spacing) => {
  let finalSpacing = "";
  if (props.m) {
    finalSpacing += `
      margin-top: ${props.m};
      margin-bottom: ${props.m};
      margin-left: ${props.m};
      margin-right: ${props.m};
    `;
  }
  if (props.mb) {
    finalSpacing += `
      margin-bottom: ${props.mb};
    `;
  }
  if (props.mt) {
    finalSpacing += `
      margin-top: ${props.mt};
    `;
  }
  if (props.ml) {
    finalSpacing += `
      margin-left: ${props.ml};
    `;
  }
  if (props.mr) {
    finalSpacing += `
      margin-right: ${props.mr};
    `;
  }
  if (props.mx) {
    finalSpacing += `
      margin-left: ${props.mx};
      margin-right: ${props.mx};
    `;
  }
  if (props.my) {
    finalSpacing += `
      margin-top: ${props.my};
      margin-bottom: ${props.my};
    `;
  }
  if (props.p) {
    finalSpacing += `
      padding-top: ${props.p};
      padding-bottom: ${props.p};
      padding-left: ${props.p};
      padding-right: ${props.p};
    `;
  }
  if (props.pb) {
    finalSpacing += `
      padding-bottom: ${props.pb};
    `;
  }
  if (props.pt) {
    finalSpacing += `
      padding-top: ${props.pt};
    `;
  }
  if (props.pl) {
    finalSpacing += `
      padding-left: ${props.pl};
    `;
  }
  if (props.pr) {
    finalSpacing += `
      padding-right: ${props.pr};
    `;
  }
  if (props.px) {
    finalSpacing += `
      padding-left: ${props.px};
      padding-right: ${props.px};
    `;
  }
  if (props.py) {
    finalSpacing += `
      padding-top: ${props.py};
      padding-bottom: ${props.py};
    `;
  }

  return css`
    ${finalSpacing}
  `;
};
