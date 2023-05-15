import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiClose: React.FC<IIcon> = ({
  size = 15,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 9 9">
      <path
        d="M8.53 1.53A.75.75 0 0 0 7.47.47l1.06 1.06ZM.47 7.47a.75.75 0 0 0 1.06 1.06L.47 7.47Zm7 1.06a.75.75 0 0 0 1.06-1.06L7.47 8.53ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm5.94 0-7 7 1.06 1.06 7-7L7.47.47Zm1.06 7-7-7L.47 1.53l7 7 1.06-1.06Z"
        fill={color}
      />
    </IconV2>
  );
};
