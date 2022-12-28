import React from "react";
import { IISectionHeader } from "./types";
import { ArrowIcon } from "@/icons-v2/ArrowIcon";
import * as s from "./styles";

export const SectionHeader = ({ title, subtitle, children }: IISectionHeader) => {
  return (
    <s.Container>
      <s.TitleWrapper>
        {title}
        {subtitle && (
          <span>
            <ArrowIcon size={10} /> {subtitle}
          </span>
        )}
      </s.TitleWrapper>
      {children}
    </s.Container>
  );
};
