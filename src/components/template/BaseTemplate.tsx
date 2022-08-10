import React from "react";
import * as s from "./styles";

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <s.BaseTemplateWrapper>{sampleTextProp}</s.BaseTemplateWrapper>;
};

export default BaseTemplate;
