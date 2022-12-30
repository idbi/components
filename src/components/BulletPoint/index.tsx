import React from "react";
import { IBulletPoint } from "./types";
import { BulletPointIcon } from "@/icons-v2/BulletPointIcon";
import * as s from "./styles";

export const BulletPoint = ({ children, spacing, color, bulletSize, size }: IBulletPoint) => {
  return (
    <s.Container color={color} size={size} bulletSize={bulletSize} spacing={spacing}>
      <BulletPointIcon />
      {children}
    </s.Container>
  );
};
