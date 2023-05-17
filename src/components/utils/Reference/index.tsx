import React from "react";
import type { IReference } from "./types";
import * as s from "./styles";

export const Reference: React.FC<IReference> = ({ reference, onClick, description }) => {
  return (
    <s.Container>
      <s.Reference onClick={onClick}>{reference}</s.Reference>
      {description && <s.Description>{description}</s.Description>}
    </s.Container>
  );
};
