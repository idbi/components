import React from "react";
import type { ICharacteristics } from "./types";
import * as s from "./styles";

export const Characteristics: React.FC<ICharacteristics> = ({ title, description, aside, descriptionTop }) => {
  return (
    <s.Container>
      <s.Main revert={descriptionTop}>
        <s.Title>{title}</s.Title>
        {description}
      </s.Main>
      {aside && <s.Aside>{aside}</s.Aside>}
    </s.Container>
  );
};
