import React, { useState } from "react";
import { useGoogleMapCtx } from "../context";
import GoogleMapReact from "google-map-react";
import MarkerWrapper from "../Marker";
import { DefaultMarker } from "../Marker/styles";

const defaultUbi = [-12.1245726, -77.0266616];
const MAPS_API = "AIzaSyAVMuVmXC6BSD0xnHC8ynEIWYgXMdQy0YU";

export const Map = () => {
  const { setMap } = useGoogleMapCtx();
  const [markerPosition, setMarkerPosition] = useState(defaultUbi);

  return (
    <GoogleMapReact
      defaultZoom={15}
      defaultCenter={{ lat: defaultUbi[0], lng: defaultUbi[1] }}
      bootstrapURLKeys={{
        key: MAPS_API,
        libraries: ["places", "geometry"],
      }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={(props) => {
        setMap({ loaded: true, api: props.maps, instance: props.map });
      }}
      onClick={(mapProps: any) => {
        setMarkerPosition([mapProps?.lat || 0, mapProps?.lng || 0]);
      }}
    >
      <MarkerWrapper lat={markerPosition[0]} lng={markerPosition[1]}>
        <DefaultMarker />
      </MarkerWrapper>
    </GoogleMapReact>
  );
};
