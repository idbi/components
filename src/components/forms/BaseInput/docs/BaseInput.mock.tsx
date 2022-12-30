/* eslint-disable no-alert */
import { CheckIcon } from "@/icons-v2/CheckIcon";
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { IBaseInput } from "../types";

const base: IBaseInput = { placeholder: "placeholder" };
const alert: IBaseInput = { placeholder: "placeholder", alert: true };
const withEndElement: IBaseInput = { placeholder: "placeholder", endEl: <CheckIcon /> };
const withStartElement: IBaseInput = { endEl: <span>custom element</span>, startEl: <PictureIcon /> };

export const mock = {
  base,
  withEndElement,
  alert,
  withStartElement,
};
