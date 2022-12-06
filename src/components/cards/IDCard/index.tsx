import React from "react";
import * as s from "./styles";
import type { IIDCard } from "./types";
import PhotoItem from "./assets/photo-item.svg";

export const IDCard: React.FC<IIDCard> = ({
  type = "SKU",
  id,
  name,
  decorator,
  img,
}) => {
  return (
    <s.Container>
      {decorator?.component && (
        <s.IconContainer padding={decorator?.padding}>
          {decorator?.component}
        </s.IconContainer>
      )}
      {img && (
        <s.ItemPhoto
          src={img?.url ? img?.url : PhotoItem}
          alt={name?.text || "item"}
        />
      )}
      <div>
        <s.Id>
          <strong>{type}</strong> {id}
        </s.Id>
        <s.Name style={{ fontWeight: name?.weight || "500" }}>
          {name?.text}
        </s.Name>
      </div>
    </s.Container>
  );
};
