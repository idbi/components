import React, { useRef, useState } from "react";
import { useGoogleMapCtx } from "../context";
import GoogleMapReact from "google-map-react";
import { MarkerWrapper } from "../Marker";
import { DefaultMarker } from "../Marker/styles";
import { IMap } from "./types";

const defaultUbi = { lat: -12.1245726, lng: -77.0266616 };

export const Map = ({ children, defaultCenter, defaultMarker = true, onSelectCoordinates = () => {} }: IMap) => {
  const { map, setMap, onSelectAddress, API_KEY } = useGoogleMapCtx();
  const [markerPosition, setMarkerPosition] = useState(defaultUbi);
  const geocoderRef = useRef<any>(null);

  const handleMapClick = (lat: number, lng: number) => {
    const latlng = { lat, lng };
    setMarkerPosition(latlng);
    onSelectCoordinates(lat, lng);

    if (!geocoderRef.current) geocoderRef.current = new map.api.Geocoder();
    geocoderRef.current.geocode({ location: latlng }, (results: any[], status: string) => {
      if (status !== "OK" || !results[0]) return;

      const geolocation = results[0];
      const locality = geolocation.address_components.find((component: any) => component.types.includes("locality"));
      const localityName = locality?.long_name || "";
      const address = geolocation.formatted_address;

      onSelectAddress({ ...latlng, address, locality: localityName });

      if (!geolocation.geometry) return;
      if (geolocation.geometry.viewport) {
        map.instance.fitBounds(geolocation.geometry.viewport);
      } else {
        map.instance.setCenter(geolocation.geometry.location);
        map.instance.setZoom(17);
      }
    });
  };

  return (
    <GoogleMapReact
      defaultZoom={15}
      defaultCenter={defaultCenter || defaultUbi}
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
        <MarkerWrapper text="Location" lat={markerPosition.lat} lng={markerPosition.lng}>
          <DefaultMarker />
        </MarkerWrapper>
      )}
      {children}
    </GoogleMapReact>
  );
};
