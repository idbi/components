import React from "react";
import Skeleton from "react-loading-skeleton";
import { IconPER } from "@/icons/flags-icons/IconPER";
import { IconUSA } from "@/icons/flags-icons/IconUSA";
import { formatNumber } from "@/utils/formatNumber";
import { ISectionedKpi } from "./types";
import * as s from "./styles";

export const SectionedKpi: React.FC<ISectionedKpi> = ({ title, sections, onlyIntegers, loading }) => {
  const format = (num: number) => formatNumber(num, onlyIntegers ? 0 : 2);

  return (
    <s.Card>
      <s.TopSection>
        <s.Title>{title}</s.Title>
      </s.TopSection>

      <s.SectionsContainer>
        {sections.map((section, i) => (
          <s.Section key={`${section.label}-${i}`}>
            <s.Title inner>{section.label}</s.Title>

            {loading ? (
              <s.SkeletonWrapper>
                <Skeleton height={20} />
              </s.SkeletonWrapper>
            ) : (
              <s.InnerSections>
                {section.PEN && (
                  <s.AmountWrapper>
                    <IconPER size={22} />
                    {format(section.PEN)}
                  </s.AmountWrapper>
                )}
                {section.USD && (
                  <s.AmountWrapper>
                    <IconUSA size={22} />
                    {format(section.USD)}
                  </s.AmountWrapper>
                )}
              </s.InnerSections>
            )}
          </s.Section>
        ))}
      </s.SectionsContainer>
    </s.Card>
  );
};
