import React from "react";
import * as s from "./styles";
import { IBaseTemplate } from "./types";

export const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <s.BaseTemplateWrapper>{sampleTextProp}</s.BaseTemplateWrapper>;
};
