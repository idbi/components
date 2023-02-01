import React, { ReactNode } from "react";

export interface IMapState {
  loaded: boolean;
  api: any;
  instance: any;
}

type TOnSelectAddress = (data: { lat: number; lng: number; address: string; locality: string }) => void;

export interface IGoogleMapCtx {
  map: IMapState;
  setMap: (state: IMapState) => void;
  addressInputRef: React.MutableRefObject<null | HTMLInputElement>;
  onSelectAddress: TOnSelectAddress;
  API_KEY: string;
}

export interface IGoogleMapProviderProps {
  API_KEY: string;
  children: ReactNode;
  onSelectAddress: TOnSelectAddress;
}
