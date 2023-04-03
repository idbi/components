/* eslint-disable no-alert */
import { IShopTable } from "../../ShopTable/types";
import { IShopTableList } from "../types";

const tables: IShopTable[] = [
  {
    uuid: "1",
    label: "B1-1",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "2",
    label: "B1-2",
    counter: 1,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "3",
    label: "B1-3",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "4",
    label: "B1-4",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "5",
    label: "A1-1",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "6",
    label: "A1-2",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "7",
    label: "A1-3",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "8",
    label: "A1-4",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "9",
    label: "BOX1-1",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "10",
    label: "BOX1-2",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "11",
    label: "BOX1-3",
    counter: 2,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "12",
    label: "BOX1-4",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "13",
    label: "PREMIUN-1",
    counter: 1,
    noHover: false,
    noCounter: false,
  },
  {
    uuid: "14",
    label: "PREMIUN-2",
    counter: 0,
    noHover: false,
    noCounter: false,
  },
];

const base: IShopTableList = {
  key: "tables1",
  tables,
};

const variant: IShopTableList = {
  key: "tables1",
  tables: tables.slice(0, 4),
};

export const mockShopTableListProps = {
  base,
  variant,
};
