import { ReactNode } from "react";
import { ICoordinates } from "../context/types";

export interface IMap {
  children?: ReactNode;
  defaultMarker?: boolean;
  defaultCenter?: ICoordinates;
  onMapLoad?: (api: any, mapInstance: any) => void;
}
