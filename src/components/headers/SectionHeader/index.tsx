import React from "react";
import { ISectionHeader } from "./types";
import { ArrowIcon } from "@/icons-v2/ArrowIcon";
import * as s from "./styles";

export const SectionHeader = ({ title, subtitle, children }: ISectionHeader) => {
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
