import { IAddressInput } from "./AddressInput/types";
import { IGoogleMapProviderProps } from "./context/types";
import { IMap } from "./Map/types";
import { IMarkerWrapper } from "./Marker/types";
import { ISearch } from "./Search/types";

export declare const Map: {
  Provider: (props: IGoogleMapProviderProps) => JSX.Element;
  Map: (props: IMap) => JSX.Element;
  Search: (props: ISearch) => JSX.Element;
  AddressInput: (props: IAddressInput) => JSX.Element;
  MarkerWrapper: (props: IMarkerWrapper) => JSX.Element;
};
