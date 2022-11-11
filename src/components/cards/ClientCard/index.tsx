import React from "react";
import { IClientCard } from "./types";
import * as s from "./styles";
import IdentificationIcon from "@/icons-v2/IdentificationIcon";

export const ClientCard = ({
  name,
  idNumber,
  img,
  otherSections = [],
}: IClientCard) => {
  return (
    <s.Card>
      {img && <s.Img src={img.src} alt={img?.alt} srcSet={img.srcSet} />}
      <div>
        <s.DataFields>
          {idNumber && (
            <span>
              <IdentificationIcon />
              {idNumber}
            </span>
          )}
          {otherSections.map((section) => (
            <span>{section}</span>
          ))}
        </s.DataFields>
        <s.Name>{name}</s.Name>
      </div>
    </s.Card>
  );
};
