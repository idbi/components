import React, { useEffect, useRef } from "react";
import { useGoogleMapCtx } from "../context";
import { BaseInput } from "@/components/forms/BaseInput";
import { ISearch } from "./types";
import * as s from "./styles";

export const Search = ({ onError, inputProps = {} }: ISearch) => {
  const { map, onSelectAddress, setMapCenter, setCoordinates, addressInputRef } = useGoogleMapCtx();
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (!map.loaded) return;

    const searchBox = new map.api.places.Autocomplete(inputRef.current);
    searchBox.addListener("place_changed", () => {
      const place = searchBox.getPlace();
      const locality = place?.address_components?.find((component: any) => component.types.includes("locality"));

      if (!place.geometry?.location) {
        const { name } = place;
        if (onError && name) onError(`No se encontaron detalles disponibles para: "${name}"`, name);
        return;
      }

      const latlng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
      onSelectAddress({ ...latlng, address: place.formatted_address, locality: locality?.long_name });
      setMapCenter(place.geometry);
      setCoordinates(latlng);

      inputRef.current!.value = "";
      if (addressInputRef?.current) addressInputRef.current.value = place.formatted_address;
    });
    searchBox.bindTo("bounds", map.instance);

    return () => {
      map.api.event.clearInstanceListeners(searchBox);
    };
  }, [map.loaded]);

  return (
    <s.InputWrapper>
      <BaseInput inputRef={inputRef} {...inputProps} />
    </s.InputWrapper>
  );
};
