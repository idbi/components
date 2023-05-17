import React from "react";
import { UserProfileIcon } from "@/components/image-containers/UserProfileIcon";
import { getInitials } from "@/utils/globalFunctions";
import type { IUserItem } from "./types";
import * as s from "./styles";

export const UserItem: React.FC<IUserItem> = ({ name, lastName, description, img, imgSize = 33, aside }) => {
  return (
    <s.Container right={aside}>
      <UserProfileIcon initials={getInitials(name, lastName)} img={img ? { src: img } : null} size={imgSize} />
      <s.UserData aside={aside}>
        {name} {lastName} {description && <div>{description}</div>}
      </s.UserData>
    </s.Container>
  );
};
