import React from "react";
import { UsersList as UsersListComponent } from "..";
import { IUsersList } from "../types";

export const UsersList = (props: IUsersList) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
      <UsersListComponent {...props} />
    </div>
  );
};
