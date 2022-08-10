import React from "react";

import { WrappSC, SvgSC } from "./style";

const Icon = (props) => {
  const { children, color, size, viewBox, active, borderRadius, variant } = props;
  return (
    <WrappSC
      active={active}
      size={size || 24}
      borderRadius={borderRadius || "50%"}
      variant={variant || "V1"}
      color={color}
    >
      <SvgSC active={active} color={color} size={size || 24} viewBox={viewBox || `0 0 32 32`} variant={variant || "V1"}>
        {children}
      </SvgSC>
    </WrappSC>
  );
};

export default Icon;
