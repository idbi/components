import React from "react";
import Skeleton from "react-loading-skeleton";
import { formatNumber as formatter } from "@/utils/formatNumber";
import { IdiActivity } from "@/icons/IdiActivity";
import { IdiKeyboardBackSpace } from "@/icons/IdiKeyboardBackSpace";
import type { IKpiCardV2 } from "./types";
import * as s from "./styles";

export const KpiCardV2: React.FC<IKpiCardV2> = ({
  name,
  symbol,
  currentAmount,
  oldAmount,
  loading,
  autoWidth = false,
  noDecimals,
  containerStyle,
}) => {
  const formatNumber = (num: number) => {
    return formatter(num, noDecimals ? 0 : 2);
  };

  const getPercentageDif = () => {
    if (!currentAmount || !oldAmount) return 0;
    const percentageDif = Math.round((currentAmount * 100) / oldAmount);
    if (Number.isNaN(percentageDif - 100)) return 0;
    if (Number.isFinite(percentageDif - 100)) return percentageDif;
    return 100;
  };

  const descriptionCompare = {
    isUp: !currentAmount || !oldAmount ? false : currentAmount >= oldAmount,
    value: `${formatNumber(getPercentageDif()) ?? "0"}%`,
  };

  const masterValue = `${symbol ?? ""} ${formatNumber(currentAmount || 0)}`;

  if (loading) {
    return (
      <s.Container autoWidth={Boolean(autoWidth)} style={containerStyle}>
        {name && (
          <s.TitleContainer>
            <Skeleton width="70px" height="17px" />
          </s.TitleContainer>
        )}
        <s.ValueContainer>
          <Skeleton width="50px" height="30px" />
          {descriptionCompare && descriptionCompare.value && (
            <s.Compare isUp={descriptionCompare.isUp}>
              <Skeleton width="50px" height="15px" />
            </s.Compare>
          )}
        </s.ValueContainer>
      </s.Container>
    );
  }

  return (
    <s.Container autoWidth={Boolean(autoWidth)} style={containerStyle}>
      {name && (
        <s.TitleContainer>
          <IdiActivity size={14} />
          {name}
        </s.TitleContainer>
      )}
      <s.ValueContainer>
        <strong>{masterValue}</strong>
        {descriptionCompare && descriptionCompare.value && (
          <s.Compare isUp={descriptionCompare.isUp}>
            <strong>
              <IdiKeyboardBackSpace
                size={14}
                color={descriptionCompare.isUp ? "#27ae60" : "#ea345f"}
                styleContainer={{
                  transform: descriptionCompare.isUp
                    ? "rotate(90deg)"
                    : "rotate(-90deg)",
                }}
              />
              {descriptionCompare.value}
            </strong>
          </s.Compare>
        )}
      </s.ValueContainer>
    </s.Container>
  );
};
