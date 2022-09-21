import React from "react";
import styled, { css } from "styled-components";
import {
  TColorScales,
  TColorNames,
} from "@/components/Typography/TextBuilder/types";

interface IPropTypes {
  color?: `${keyof TColorNames}/${keyof TColorScales}`;
  icon: (props: any) => JSX.Element;
  size?: number;
}

export const IconAdapter: React.FC<IPropTypes> = ({
  color = "PRIMARY/900",
  size,
  icon: Component,
  ...props
}) => {
  const colorName = color.split("/")[0] as keyof TColorNames;
  const intensity = +color.split("/")[1] as keyof TColorScales;

  const StyledIcon = styled(Component)`
    ${({ theme }) => css`
      color: ${theme.color[colorName][intensity]};
    `}
  `;

  return <StyledIcon size={size} {...props} />;
};
