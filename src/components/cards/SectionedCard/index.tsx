import React from "react";
import type { ISectionedCard } from "./types";
import * as s from "./styles";

export const SectionedCard = ({ children }: ISectionedCard) => {
  return <s.Card>{children}</s.Card>;
};

SectionedCard.Header = s.Header;
SectionedCard.Body = s.Body;
SectionedCard.Footer = s.Footer;
