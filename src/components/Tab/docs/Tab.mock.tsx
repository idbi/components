/* eslint-disable no-alert */
import { theme } from "@/theme";
import { ITab } from "../types";

const base: ITab = {
  children: "Some tab",
  active: true,
};

const customActiveColor: ITab = {
  children: "Some tab",
  active: true,
  activeColor: theme.color.PRIMARY[900],
};

const roundedTab: ITab = {
  children: "Some tab",
  active: true,
  activeColor: theme.color.PRIMARY[900],
  rounded: true,
};

const customTabWidth: ITab = {
  children: "Some tab",
  active: true,
  activeColor: theme.color.PRIMARY[900],
  rounded: true,
  tabWidth: 12,
};

const customTabHeight: ITab = {
  children: "Some tab",
  active: true,
  activeColor: theme.color.PRIMARY[900],
  tabHeight: 2,
};

const fullWidthTab: ITab = {
  children: "Some tab",
  active: true,
  activeColor: theme.color.PRIMARY[900],
  tabHeight: 2,
  tabFullWidth: true,
};

export const mock = {
  base,
  customActiveColor,
  customTabWidth,
  roundedTab,
  customTabHeight,
  fullWidthTab,
};
