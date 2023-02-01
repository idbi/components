import React from "react";
import GoogleMapCtxProvider from "./context";
import { Map as MapComponent } from "./Map";
import { AddressInput } from "./AddressInput";
import { Search } from "./Search";
import { MarkerWrapper } from "./Marker";

export const Map = { Provider: GoogleMapCtxProvider, Map: MapComponent, Search, AddressInput, MarkerWrapper };
