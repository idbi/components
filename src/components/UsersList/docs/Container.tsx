import React from "react";
import { UsersList } from "..";
import { IUsersList } from "../types";

export const Container = (props: IUsersList) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
      <UsersList {...props} />
    </div>
  );
};
