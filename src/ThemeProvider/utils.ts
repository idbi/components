import { css, DefaultTheme } from "styled-components";
import { TColor } from "@/components/Typography/TextBuilder/types";
import { IButton } from "@/components/Button/types";
import { Size } from "@/components/Typography/utils";

export const getShape = ({ shape }: Pick<IButton, "shape">) => {
  switch (shape) {
    case "rounded":
      return css`
        border-radius: 10px;
      `;
    case "squared":
      return css`
        border-radius: 0;
      `;
    case "circular":
      return css`
        border-radius: 25px;
      `;
    default:
      return css`
        border-radius: 10px;
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
        background-color: transparent;
        border: 1px solid ${({ theme }) => getColor({ theme, color })};
        color: ${({ theme }) => getColor({ theme, color })};
      `;
    case "flat":
      return css`
        background-color: transparent;
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

export const getColor = ({
  color = "SECONDARY/900",
  theme,
  design,
  hover,
}: {
  theme: DefaultTheme;
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

export const getSize = ({ size }: Pick<IButton, "size">) => {
  if (size)
    return css`
      font-size: ${Size[size] || size};
    `;
};
