import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiCheckCircle: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <SvgWrapper
      onClick={onClick}
      size={size}
      style={style}
      svgProps={{
        viewBox: "0 0 32 32",
      }}
    >
      <path
        d="M26.726 13.863c0 7.104-5.76 12.863-12.863 12.863C6.759 26.726 1 20.966 1 13.863 1 6.759 6.759 1 13.863 1c7.104 0 12.863 5.759 12.863 12.863Z"
        fill={color}
      />
      <path
        d="m7.926 13.164 4.398 4.657 7.475-7.916m6.927 3.958c0 7.104-5.76 12.863-12.863 12.863C6.759 26.726 1 20.966 1 13.863 1 6.759 6.759 1 13.863 1c7.104 0 12.863 5.759 12.863 12.863Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgWrapper>
  );
};
