import React, { useState, useRef, createContext, ReactNode } from "react";
import { IGoogleMapCtx, IMapState } from "./types";

export const GoogleMapCtx = createContext({} as IGoogleMapCtx);

const GoogleMapCtxProvider = ({ children }: { children: ReactNode }) => {
  const [map, setMap] = useState<IMapState>({ loaded: false, api: null, instance: null });
  const addressInputRef = useRef<null | HTMLInputElement>(null);
  return <GoogleMapCtx.Provider value={{ map, setMap, addressInputRef }}>{children}</GoogleMapCtx.Provider>;
};

export default GoogleMapCtxProvider;
