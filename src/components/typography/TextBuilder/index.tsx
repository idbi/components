import React from "react";
import styled, { css } from "styled-components";
import { baseStyles, customStyles } from "./styles";
import { ITextBuilderProps, tagsMap } from "./types";

const SC = styled.div<ITextBuilderProps>`
  ${({ as }) => `
    ${baseStyles}
    ${customStyles(as)}
  `}
`;

export const TextBuilder = ({ as, ...props }: ITextBuilderProps) => {
  const selectedComponent = tagsMap[as];
  return <SC as={selectedComponent} {...props} />;
};
