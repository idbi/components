import React, { ReactNode } from "react";

export interface IMapState {
  loaded: boolean;
  api: any;
  instance: any;
}

interface ICoordinates {
  lat: number;
  lng: number;
}
type TOnSelectAddress = (data: ICoordinates & { address: string; locality: string }) => void;

export interface IGoogleMapCtx {
  map: IMapState;
  setMap: (state: IMapState) => void;
  addressInputRef: React.MutableRefObject<null | HTMLInputElement>;
  onSelectAddress: TOnSelectAddress;
  API_KEY: string;
  setMapCenter: (geometry: any) => void;
  coordinates: ICoordinates;
  setCoordinates: (coordinates: ICoordinates) => void;
}

export interface IGoogleMapProviderProps {
  API_KEY: string;
  children: ReactNode;
  onSelectAddress: TOnSelectAddress;
  defaultCenter?: { lat: number; lng: number };
  onSelectCoordinates?: (coordinates: ICoordinates) => void;
}
