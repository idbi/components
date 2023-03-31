import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiArea: React.FC<IIcon> = ({
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
        viewBox: "0 0 19 18",
      }}
    >
      <path
        d="M2.78516 0.75H16.7852C17.4755 0.75 18.0352 1.30964 18.0352 2V9.0625C18.0352 9.75286 17.4755 10.3125 16.7852 10.3125H15.2936C13.7748 10.3125 12.5436 11.5437 12.5436 13.0625V16C12.5436 16.6904 11.984 17.25 11.2936 17.25H2.78515C2.0948 17.25 1.53516 16.6904 1.53516 16V2C1.53516 1.30964 2.0948 0.75 2.78516 0.75Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </SvgWrapper>
  );
};
