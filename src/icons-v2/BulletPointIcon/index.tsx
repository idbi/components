import React from "react";
import { IconV2 } from "../IconV2";
import { IIconV2 } from "../IconV2/types";

export const BulletPointIcon = (props: IIconV2) => {
  return (
    <IconV2 viewBox="0 0 8 8" {...props}>
      <circle xmlns="http://www.w3.org/2000/svg" cx="4" cy="4" r="4" fill="currentColor" />
    </IconV2>
  );
};
