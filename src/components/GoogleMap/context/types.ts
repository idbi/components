import React from "react";

export interface IMapState {
  loaded: boolean;
  api: any;
  instance: any;
}

export interface IGoogleMapCtx {
  map: IMapState;
  setMap: (state: IMapState) => void;
  addressInputRef: React.MutableRefObject<null | HTMLInputElement>;
}
