import React, { useState, useRef, createContext, useContext } from "react";
import { IGoogleMapCtx, IGoogleMapProviderProps, IMapState } from "./types";

export const GoogleMapCtx = createContext({} as IGoogleMapCtx);
const defaultUbi = { lat: -12.1245726, lng: -77.0266616 };

const GoogleMapCtxProvider = ({
  children,
  onSelectAddress,
  API_KEY,
  defaultCenter,
  onSelectCoordinates,
}: IGoogleMapProviderProps) => {
  const [map, setMap] = useState<IMapState>({ loaded: false, api: null, instance: null });
  const [coordinates, setCoordinates] = useState(defaultCenter || defaultUbi);
  const addressInputRef = useRef<null | HTMLInputElement>(null);

  const setMapCenter = (geometry: any) => {
    if (geometry.viewport) {
      map.instance.fitBounds(geometry.viewport);
    } else {
      map.instance.setCenter(geometry.location);
      map.instance.setZoom(17);
    }
  };

  const handleUpdateCoordinates = (value: typeof coordinates) => {
    setCoordinates(value);
    if (onSelectCoordinates) onSelectCoordinates(value);
  };

  return (
    <GoogleMapCtx.Provider
      value={{
        map,
        setMap,
        addressInputRef,
        onSelectAddress,
        API_KEY,
        setMapCenter,
        coordinates,
        setCoordinates: handleUpdateCoordinates,
      }}
    >
      {children}
    </GoogleMapCtx.Provider>
  );
};

export default GoogleMapCtxProvider;
export const useGoogleMapCtx = () => useContext(GoogleMapCtx);
