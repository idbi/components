import { ReactNode } from "react";
export type Placement = "center" | "center-bottom";

export interface IMarkerWrapper {
  children: ReactNode;
  text?: string;
  lat?: number | null | undefined;
  lng?: number | null | undefined;
  placement?: Placement;
}
