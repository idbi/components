import React from "react";
import { ISectionCard } from "./types";
import * as s from "./styles";

export const SectionCard = ({
  key,
  title,
  icon,
  headerAside,
  children,
  sections = [],
  showBody = true,
  containerStyle,
}: ISectionCard) => {
  return (
    <s.Card style={containerStyle}>
      {(title || headerAside) && (
        <s.Header hasContent={!!children && showBody}>
          <s.Title>
            {icon} {title}
          </s.Title>
          {headerAside}
        </s.Header>
      )}
      {showBody ? (
        <>
          {children}
          {sections.map(
            (section, i) =>
              section && (
                <s.Section key={`${i}${key}sectioncard`}>{section}</s.Section>
              )
          )}
        </>
      ) : null}
    </s.Card>
  );
};
