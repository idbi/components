/* eslint-disable no-alert */
import { IBaseTextArea } from "../types";

const base: IBaseTextArea = { placeholder: "placeholder" };
const alert: IBaseTextArea = { placeholder: "placeholder", alert: true };

export const mock = {
  base,
  alert,
};
