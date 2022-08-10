import React, { FC, useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { IRanking } from "../../../modules/store/interface";

import { HorizontalBar, SimpleMetricCard } from "../styles";

import * as styled from "./styles";

interface HorizontalRankingCardProps {
  data: null | IRanking[];
  Heading: JSX.Element;
  maxShowItems: number;
  isLoading: boolean;
  currency: { label: string; value: string };
}

const HorizontalRankingCard: FC<HorizontalRankingCardProps> = ({
  data,
  Heading,
  maxShowItems,
  isLoading,
  currency,
}) => {
  const [hide, setHide] = useState(false);
  const [dataDisplay, setDataDisplay] = useState<IRanking[]>(data ?? []);

  const maxValue = useMemo(() => {
    if (!data) return 0;
    return Math.max(...data.map(({ value }) => value));
  }, [data]);

  const dataShorted = useMemo(() => {
    if (!data) return [];
    return data.slice(0, maxShowItems);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    setHide(data.length > maxShowItems);
  }, [data]);

  useEffect(() => {
    if (hide) {
      setDataDisplay(dataShorted);
    } else {
      setDataDisplay(data ?? []);
    }
  }, [hide, data]);

  return (
    <div>
      <SimpleMetricCard>
        {Heading}
        <div>
          {isLoading ? (
            [7, 6, 5, 4, 3, 2, 1].map((num) => (
              <styled.RankingRow key={`ranking-card-${num}-`}>
                <Skeleton height={20} style={{ width: "100%" }} />
                <Skeleton height={20} width={150} />
                <Skeleton height={20} style={{ width: "100%" }} />
              </styled.RankingRow>
            ))
          ) : data ? (
            <>
              {dataDisplay.map(({ label, value }, index) => (
                <styled.RankingRow key={`ranking-card-${label}-${value}`}>
                  <styled.RankingLabel>
                    {" "}
                    <span> {index + 1}.</span> {label}{" "}
                  </styled.RankingLabel>
                  <HorizontalBar percentage={(value / maxValue) * 100} />
                  <styled.RankingValue> {`${currency.label} ${value}`} </styled.RankingValue>
                </styled.RankingRow>
              ))}
            </>
          ) : (
            <styled.EmptyMessage>- No hay datos</styled.EmptyMessage>
          )}
        </div>
        {!isLoading && data && data.length > maxShowItems && (
          <styled.SeeMoreButtonContainer>
            <styled.SeeMoreButton onClick={() => setHide((s) => !s)}>
              {hide ? `Ver ${data.length - maxShowItems} más ` : `Ver menos`}{" "}
              {hide ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </styled.SeeMoreButton>
          </styled.SeeMoreButtonContainer>
        )}
      </SimpleMetricCard>
    </div>
  );
};

export default HorizontalRankingCard;
