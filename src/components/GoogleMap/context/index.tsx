import React, { useState, useRef, createContext, useContext } from "react";
import { IGoogleMapCtx, IGoogleMapProviderProps, IMapState } from "./types";

export const GoogleMapCtx = createContext({} as IGoogleMapCtx);

const GoogleMapCtxProvider = ({ children, onSelectAddress, API_KEY }: IGoogleMapProviderProps) => {
  const [map, setMap] = useState<IMapState>({ loaded: false, api: null, instance: null });
  const addressInputRef = useRef<null | HTMLInputElement>(null);
  return (
    <GoogleMapCtx.Provider value={{ map, setMap, addressInputRef, onSelectAddress, API_KEY }}>
      {children}
    </GoogleMapCtx.Provider>
  );
};

export default GoogleMapCtxProvider;
export const useGoogleMapCtx = () => useContext(GoogleMapCtx);
