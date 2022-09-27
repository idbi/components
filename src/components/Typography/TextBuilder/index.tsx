import React from "react";
import styled from "styled-components";
import { baseStyles, customStyles, tagsMap } from "./styles";
import type { ITextBuilderProps } from "./types";

const SC = styled.div<ITextBuilderProps>`
  ${baseStyles}
  ${({ as }) => customStyles(as)}
`;

export const TextBuilder = ({ as, ...props }: ITextBuilderProps) => {
  const selectedComponent: any = tagsMap[as];
  return <SC as={selectedComponent} {...props} />;
};
