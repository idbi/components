/* eslint-disable no-alert */
import { ISectionHeader } from "../types";

const base: ISectionHeader = { title: "Productos", subtitle: "Principal" };
const withAside: ISectionHeader = { title: "Productos", subtitle: "Principal", aside: <button>some btn</button> };
const withoutSubtitle: ISectionHeader = { title: "Productos", aside: <button>some btn</button> };

export const mock = {
  base,
  withAside,
  withoutSubtitle,
};
