import React from "react";
import { Button } from "@/components/Button";
import { Container } from "./styles";
import type { ISimpleFooter } from "./types";

export const SimpleFooter: React.FC<ISimpleFooter> = ({
  description,
  buttons,
  container,
}) => {
  return (
    <Container
      padding={container?.padding}
      gap={container?.gap}
      marginTop={container?.marginTop}
      isFixed={container?.isFixed}
      zIndex={container?.zIndex}
      boxShadow={container?.boxShadow}
    >
      {description && <div>{description}</div>}
      {buttons?.map((button) => (
        <Button key={crypto.randomUUID()} {...button} />
      ))}
    </Container>
  );
};
