import React from "react";
import { IMarkerWrapper } from "./types";
import * as s from "./styles";

export const MarkerWrapper = ({ children, placement }: IMarkerWrapper) => {
  if (placement) return <s.MarkerContainer>{children}</s.MarkerContainer>;
  return <>{children}</>;
};
