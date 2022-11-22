import React from "react";
import * as s from "./styles";
import { ITransparentBadge } from "./types";
import { getInRangeNum } from "./utils";

export const TransparentBadge = ({ intensity = 0.8, opacity = 0.5, children, style = {}, ...rest }: ITransparentBadge) => {
  const intensityNum = getInRangeNum(intensity, 0, 1);
  const opacityNum = getInRangeNum(opacity, 0, 1);
  const calculatedIntensity = 256 * intensityNum;

  return (
    <s.Span
      style={{
        backgroundColor: `rgba(${calculatedIntensity}, ${calculatedIntensity}, ${calculatedIntensity}, ${opacityNum})`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </s.Span>
  );
};

