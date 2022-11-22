import React from "react";
import { IUserIcon } from "./types";
import * as s from "./styles";

export const UserProfileIcon = ({ img, size = 36, initials }: IUserIcon) => {
  const formattedInitials = initials.slice(0, 2).toUpperCase();

  return (
    <s.ImgContainer
      hasImg={!img?.src}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size / (initials.length === 1 ? 2 : 2.25)}px`,
      }}
    >
      {img?.src ? <img {...img} /> : formattedInitials}
    </s.ImgContainer>
  );
};
