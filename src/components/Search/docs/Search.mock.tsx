/* eslint-disable no-alert */
import { UserProfileIcon } from "@/components/image-containers/UserProfileIcon";
import { Text } from "@/components/Typography";
import { ISearch } from "../types";
import { mockUsers } from "./mocks/mockUsers";

const defaultSearch: ISearch = {
  onSearch: () => {},
  initSearch: "",
  size: "small",
  placeholder: "search with default props",
  addCleanOption: true,
  addSearchIcon: true,
  disabled: false,
  alert: false,
  loading: false,
  delay: 400,
};

const smallSearch: ISearch = {
  onSearch: () => {},
  size: "small",
  placeholder: "small size search",
  addCleanOption: true,
  addSearchIcon: true,
};

const bigSearch: ISearch = {
  onSearch: () => {},
  size: "big",
  placeholder: "big size search",
  addCleanOption: true,
  addSearchIcon: true,
};

const alertSearch: ISearch = {
  onSearch: () => {},
  size: "big",
  placeholder: "alert search",
  addCleanOption: true,
  addSearchIcon: true,
  alert: true,
};

const disabledSearch: ISearch = {
  onSearch: () => {},
  size: "big",
  placeholder: "disabled search",
  addCleanOption: true,
  addSearchIcon: true,
  disabled: true,
};

const defaultSearchWithFoundItems: ISearch = {
  onSearch: () => {},
  initSearch: "",
  size: "small",
  placeholder: "search with default props",
  addCleanOption: true,
  addSearchIcon: true,
  disabled: false,
  alert: false,
  loading: false,
  delay: 400,
  foundItems: {
    show: true,
    data: mockUsers,
    onSelectItem: {
      onSelect: (value) => alert(value?.name),
      hideOnSelect: true,
    },
    getLabel: (item) => {
      return <div>{item?.name}</div>;
    },
    containerStyle: {
      maxHeight: "250px",
    },
    hideOnBlur: true,
    enableScannerBehavior: false,
    addCreateOption: {
      show: false,
      location: "top",
      text: "Crear",
      onCreate: () => {},
    },
  },
};

const searchWithScannerBehavior: ISearch = {
  onSearch: () => {},
  initSearch: "",
  size: "small",
  placeholder:
    "search with scanner behavior / if 1 item is found it is selected",
  addCleanOption: true,
  addSearchIcon: true,
  foundItems: {
    enableScannerBehavior: true,
    data: mockUsers,
    getLabel: (item) => {
      return <div>{item?.name}</div>;
    },
  },
};

const searchWithCustomFoundItems: ISearch = {
  onSearch: () => {},
  initSearch: "",
  size: "small",
  placeholder:
    "search with custom found items / If you want to add a card consider that it has no background or border",
  addCleanOption: true,
  addSearchIcon: true,
  foundItems: {
    data: mockUsers,
    getLabel: (item) => {
      return (
        <div style={{ display: "flex", gap: "10px" }}>
          <UserProfileIcon initials={item?.name} size={30} />
          <p>
            <Text size="sm" color="PRIMARY/800">
              {item?.name}
            </Text>
            <br />
            <Text size="xs" color="NEUTRAL/400">
              {item?.email}
            </Text>
          </p>
        </div>
      );
    },
    addCreateOption: {
      show: true,
      onCreate: () => {},
      location: "top",
    },
  },
};

export const mockSearchProps = {
  defaultSearch,
  smallSearch,
  bigSearch,
  alertSearch,
  disabledSearch,
  defaultSearchWithFoundItems,
  searchWithScannerBehavior,
  searchWithCustomFoundItems,
};
