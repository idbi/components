import React, { useRef } from "react";
import { useGoogleMapCtx } from "../context";

import GoogleMapReact from "google-map-react";
import { MarkerWrapper } from "../MarkerWrapper";
import { IMap } from "./types";
import { MarkerIcon } from "@/icons-v2/MarkerIcon";

const defaultUbi = { lat: -12.1245726, lng: -77.0266616 };

export const Map = ({ children, defaultMarker = true, defaultCenter, onMapLoad }: IMap) => {
  const { map, setMap, API_KEY, setMapCenter, coordinates, setCoordinates, setAddressState, editedAddressRef } =
    useGoogleMapCtx();
  const geocoderRef = useRef<any>(null);

  const handleMapClick = (lat: number, lng: number) => {
    const latlng = { lat, lng };
    setCoordinates(latlng);

    if (!geocoderRef.current) geocoderRef.current = new map.api.Geocoder();
    geocoderRef.current.geocode({ location: latlng }, (results: any[], status: string) => {
      if (status !== "OK" || !results[0]) return;

      const geolocation = results[0];
      const locality = geolocation.address_components.find((component: any) => component.types.includes("locality"));
      const localityName = locality?.long_name || "";
      const address = geolocation.formatted_address;

      if (geolocation.geometry) setMapCenter(geolocation.geometry);
      setAddressState((s) => {
        const updatedAddress = editedAddressRef?.current ? s.address : address;
        return { ...latlng, locality: localityName, address: updatedAddress };
      });
    });
  };

  const validCoordinates = !!(coordinates.lat && coordinates.lng);

  return (
    <GoogleMapReact
      defaultZoom={15}
      defaultCenter={defaultCenter || (validCoordinates ? coordinates : defaultUbi)}
      bootstrapURLKeys={{
        key: API_KEY,
        libraries: ["places", "geometry"],
      }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={(props) => {
        setMap({ loaded: true, api: props.maps, instance: props.map });
        if (onMapLoad) onMapLoad(props.maps, props.map);
      }}
      onClick={(mapProps: any) => {
        handleMapClick(mapProps?.lat || 0, mapProps?.lng || 0);
      }}
    >
      {defaultMarker && validCoordinates && (
        <MarkerWrapper text="Location" placement="center-bottom" {...coordinates}>
          <MarkerIcon size={28} />
        </MarkerWrapper>
      )}
      {children}
    </GoogleMapReact>
  );
};
