import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  text?: string;
  lat: number | null | undefined;
  lng: number | null | undefined;
}

const MarkerWrapper = ({ children }: IProps) => {
  return <>{children}</>;
};

export default MarkerWrapper;
