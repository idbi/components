import React from "react";
import { UserIconTooltip } from "..";
import { IUserIconTooltip } from "../types";

export const Container = (props: IUserIconTooltip) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
      <UserIconTooltip {...props} />
    </div>
  );
};
