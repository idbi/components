import React from "react";
import { UserIconTooltip } from "../image-containers/UserIconTooltip";
import { IUsersList } from "./types";
import { PlusIcon } from "@/icons-v2/PlusIcon";
import * as s from "./styles";

export const UsersList = ({ users, onAdd, iconSize = 34 }: IUsersList) => {
  return (
    <s.Container size={iconSize}>
      {onAdd && (
        <s.AddUserBtn size={iconSize} onClick={onAdd}>
          <PlusIcon size={iconSize / 2.5} />
        </s.AddUserBtn>
      )}
      {[...users].reverse().map((user) => (
        <div>
          <UserIconTooltip {...user} size={iconSize} tooltipProps={{ strategy: "fixed" }} />
        </div>
      ))}
    </s.Container>
  );
};
