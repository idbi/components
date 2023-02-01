import React, { useRef } from "react";
import { useGoogleMapCtx } from "../context";
import GoogleMapReact from "google-map-react";
import { MarkerWrapper } from "../Marker";
import { DefaultMarker } from "../Marker/styles";
import { IMap } from "./types";

export const Map = ({ children, defaultMarker = true }: IMap) => {
  const { map, setMap, onSelectAddress, API_KEY, setMapCenter, coordinates, setCoordinates } = useGoogleMapCtx();
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

      onSelectAddress({ ...latlng, address, locality: localityName });
      if (geolocation.geometry) setMapCenter(geolocation.geometry);
    });
  };

  return (
    <GoogleMapReact
      defaultZoom={15}
      defaultCenter={coordinates}
      bootstrapURLKeys={{
        key: API_KEY,
        libraries: ["places", "geometry"],
      }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={(props) => {
        setMap({ loaded: true, api: props.maps, instance: props.map });
      }}
      onClick={(mapProps: any) => {
        handleMapClick(mapProps?.lat || 0, mapProps?.lng || 0);
      }}
    >
      {defaultMarker && (
        <MarkerWrapper text="Location" {...coordinates}>
          <DefaultMarker />
        </MarkerWrapper>
      )}
      {children}
    </GoogleMapReact>
  );
};
