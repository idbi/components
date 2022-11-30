import React from "react";
import { Container } from "./styles";
import type { IBadge } from "./types";

export const Badge: React.FC<IBadge> = ({
  text,
  padding,
  color,
  background,
  applyFlex,
  maxWidth,
}) => {
  return (
    <Container
      padding={padding}
      color={color}
      background={background}
      applyFlex={applyFlex}
      maxWidth={maxWidth}
    >
      {text}
    </Container>
  );
};
