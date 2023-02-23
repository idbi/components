import { TSetState } from "@/types/utilityTypes";
import React, { ReactNode } from "react";

export interface IMapState {
  loaded: boolean;
  api: any;
  instance: any;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}
export interface IAddressData extends ICoordinates {
  address: string;
  locality: string;
}
type TOnSelectAddress = (data: IAddressData) => void;

export interface IGoogleMapCtx {
  API_KEY: string;
  map: IMapState;
  setMap: (state: IMapState) => void;
  editedAddressRef: React.MutableRefObject<boolean>;
  onSelectAddress: TOnSelectAddress;
  setMapCenter: (geometry: any) => void;
  coordinates: ICoordinates;
  setCoordinates: (coordinates: ICoordinates) => void;
  addressState: IAddressData;
  setAddressState: TSetState<IAddressData>;
}

export interface IGoogleMapProviderProps {
  API_KEY: string;
  children: ReactNode;
  onSelectAddress: TOnSelectAddress;
  initialData?: Partial<IAddressData>;
  onSelectCoordinates?: (coordinates: ICoordinates) => void;
}
