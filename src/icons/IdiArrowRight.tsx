import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiArrowRight: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2 onClick={onClick} size={size} style={style} viewBox="0 0 10 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.96967 15.5303C0.676777 15.2374 0.676777 14.7626 0.96967 14.4697L7.43934 8L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L9.03033 7.46967C9.32322 7.76256 9.32322 8.23744 9.03033 8.53033L2.03033 15.5303C1.73744 15.8232 1.26256 15.8232 0.96967 15.5303Z"
        fill={color}
      />
    </IconV2>
  );
};
