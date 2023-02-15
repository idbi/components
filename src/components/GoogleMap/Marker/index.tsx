import React, { ReactNode } from "react";
import { Placement } from "./types";
import * as s from "./styles";

interface IProps {
  children: ReactNode;
  text?: string;
  lat?: number | null | undefined;
  lng?: number | null | undefined;
  placement?: Placement;
}

export const MarkerWrapper = ({ children, placement }: IProps) => {
  if (placement) return <s.MarkerContainer>{children}</s.MarkerContainer>;
  return <>{children}</>;
};
