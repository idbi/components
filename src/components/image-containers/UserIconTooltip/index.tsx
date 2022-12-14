import React from "react";
import { TextTooltipContainer } from "@/components/tooltip-containers/TextTooltipContainer";
import { getInitials } from "@/utils/globalFunctions";
import { UserProfileIcon } from "../UserProfileIcon";
import { IUserIconTooltip } from "./types";

export const UserIconTooltip = ({ name, lastname, img, size, tooltipProps = {} }: IUserIconTooltip) => {
  return (
    <TextTooltipContainer
      tooltipContent={`${name} ${lastname || ""}`}
      render={(props) => (
        <UserProfileIcon initials={getInitials(name, lastname)} img={img} size={size} containerProps={{ ...props }} />
      )}
      {...tooltipProps}
    />
  );
};
