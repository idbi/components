import React, { useState, useRef, createContext, useContext, useEffect } from "react";
import useFirstRender from "@/hooks/useFirstRender";
import { IAddressData, IGoogleMapCtx, IGoogleMapProviderProps, IMapState } from "./types";

export const GoogleMapCtx = createContext({} as IGoogleMapCtx);
const initialAddress = { lat: 0, lng: 0, locality: "", address: "" };

const GoogleMapCtxProvider = ({
  children,
  onSelectAddress,
  API_KEY,
  initialData = {},
  onSelectCoordinates,
}: IGoogleMapProviderProps) => {
  const [map, setMap] = useState<IMapState>({ loaded: false, api: null, instance: null });
  const [addressState, setAddressState] = useState<IAddressData>({ ...initialAddress, ...initialData });
  const [coordinates, setCoordinates] = useState({ lat: addressState.lat, lng: addressState.lng });

  const editedAddressRef = useRef(false);
  const firstRender = useFirstRender();

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

  useEffect(() => {
    if (!firstRender) onSelectAddress(addressState);
  }, [addressState]);

  return (
    <GoogleMapCtx.Provider
      value={{
        API_KEY,
        map,
        setMap,
        editedAddressRef,
        onSelectAddress,
        setMapCenter,
        coordinates,
        setCoordinates: handleUpdateCoordinates,
        setAddressState,
        addressState,
      }}
    >
      {children}
    </GoogleMapCtx.Provider>
  );
};

export default GoogleMapCtxProvider;
export const useGoogleMapCtx = () => useContext(GoogleMapCtx);
