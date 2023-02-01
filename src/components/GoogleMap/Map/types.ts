import { ReactNode } from "react";

export interface IMap {
  children?: ReactNode;
  defaultMarker?: boolean;
  onSelectCoordinates?: (lat: number, lng: number) => void;
  defaultCenter?: { lat: number; lng: number };
}
