import React from "react";
import styled from "styled-components";
import { baseStyles, customStyles } from "./styles";
import { ITextBuilderProps, Tags } from "./types";

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
  span: "span",
  strong: "strong",
  label: "label",
};

const SC = styled.div<ITextBuilderProps>`
  ${baseStyles}
  ${({ as }) => customStyles(as)}
`;

export const TextBuilder = ({ as, ...props }: ITextBuilderProps) => {
  const selectedComponent: any = tagsMap[as];
  return <SC as={selectedComponent} {...props} />;
};
