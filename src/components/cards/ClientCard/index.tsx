import React from "react";
import { UserProfileIcon } from "@/components/image-containers/UserProfileIcon";
import { IdentificationIcon } from "@/icons-v2/IdentificationIcon";
import { IClientCard } from "./types";
import { CloseIcon } from "@/icons-v2/CloseIcon";
import * as s from "./styles";

export const ClientCard = ({ name, lastName, idNumber, img, otherSections = [], onRemove }: IClientCard) => {
  return (
    <s.Card>
      <s.ImgWrapper>
        <UserProfileIcon img={img} initials={lastName ? `${name.charAt(0)}${lastName.charAt(0)}` : name.charAt(0)} />
      </s.ImgWrapper>

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
        <s.Name>
          {name} {lastName}
        </s.Name>
      </div>

      {onRemove && (
        <s.CloseIconWrapper>
          <CloseIcon onClick={onRemove} />
        </s.CloseIconWrapper>
      )}
    </s.Card>
  );
};
