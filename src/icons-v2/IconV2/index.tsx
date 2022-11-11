import React from "react";
import { IProps } from "./types";
import * as s from "./styles";

export const IconV2 = ({
  color = "currentColor",
  size,
  children,
  ...rest
}: IProps) => {
  return (
    <s.Svg
      color={color}
      height={size ? `${size}px` : "1em"}
      width={size ? `${size}px` : "1em"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </s.Svg>
  );
};
