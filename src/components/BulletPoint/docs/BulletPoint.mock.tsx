/* eslint-disable no-alert */
import { theme } from "@/theme";
import { IBulletPoint } from "../types";

const base: IBulletPoint = {
  children: "Some Text",
};

const customColor: IBulletPoint = {
  children: "Some Text",
  color: theme.color.ALERT[900],
};

const customSize: IBulletPoint = {
  children: "Some Text",
  color: theme.color.ALERT[900],
  size: 30,
};

const customBulletSize: IBulletPoint = {
  children: "Some Text",
  color: theme.color.ALERT[900],
  size: 30,
  bulletSize: 6,
};

const customSpacing: IBulletPoint = {
  children: "Some Text",
  color: theme.color.ALERT[900],
  size: 30,
  bulletSize: 6,
  spacing: 100,
};

export const mock = {
  base,
  customColor,
  customSize,
  customBulletSize,
  customSpacing,
};
