import React from "react";
import { UserIconTooltip as UserIconTooltipComponent } from "..";
import { IUserIconTooltip } from "../types";

export const UserIconTooltip = (props: IUserIconTooltip) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
      <UserIconTooltipComponent {...props} />
    </div>
  );
};
