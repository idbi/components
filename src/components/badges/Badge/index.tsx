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
  weight,
  borderRadius,
  withBorder,
}) => {
  return (
    <Container
      padding={padding}
      color={color}
      background={background}
      applyFlex={applyFlex}
      maxWidth={maxWidth}
      weigth={weight}
      borderRadius={borderRadius}
      withBorder={withBorder}
    >
      {text}
    </Container>
  );
};
