import React from "react";
import styled, { css } from "styled-components";
import { CardWrapper } from "./styles";
import { ICard } from "./types";

export const Card: React.FC<ICard> = ({
  design = "primary",
  header,
  options,
  optionsFormatter,
  content,
  withSeparator,
}) => {
  return (
    <CardWrapper design={design} withSeparator={withSeparator}>
      {header && <header>{header}</header>}
      {options && optionsFormatter && (
        <ul>
          {options.map((option, index) => (
            <>
              <li key={option.value}>{optionsFormatter(option)}</li>
            </>
          ))}
        </ul>
      )}
      {content && content}
    </CardWrapper>
  );
};
