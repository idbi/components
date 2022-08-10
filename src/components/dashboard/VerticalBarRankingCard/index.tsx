import React, { FC, useRef } from "react";
import Skeleton from "react-loading-skeleton";

import { SimpleMetricCard, VerticalBar } from "../styles";

import * as styled from "./styles";

export interface VerticalBarRankingCardProps {
  data: null | { label: string; value: number }[];
  Heading: JSX.Element;
  isLoading: boolean;
  currency: { label: string; value: string };
}

const VerticalBarRankingCard: FC<VerticalBarRankingCardProps> = ({
  Heading,
  data,
  isLoading,
  currency,
}) => {
  const scrollComponentRef = useRef<HTMLDivElement>(null);

  const handleLeft = () => {
    if (scrollComponentRef.current) {
      scrollComponentRef.current.scrollLeft -= 100;
    }
  };
  const handleRight = () => {
    if (scrollComponentRef.current) {
      scrollComponentRef.current.scrollLeft += 100;
    }
  };

  return (
    <div>
      <SimpleMetricCard>
        {Heading}
        <styled.Content>
          <styled.Scroll ref={scrollComponentRef}>
            {isLoading ? (
              <>
                {[7, 5, 4, 3, 2, 1].map((num) => (
                  <styled.VerticalBarItemData key={`skeleton-${num}`}>
                    <Skeleton width={40} height={(num / 6) * 100} />
                  </styled.VerticalBarItemData>
                ))}
              </>
            ) : (
              <>
                {!data ? (
                  <styled.EmptyMessage>- No hay datos</styled.EmptyMessage>
                ) : (
                  <>
                    {data.map(({ label, value }) => (
                      <styled.VerticalBarItemData
                        key={`sales-by-org${label}-${value}`}
                      >
                        <VerticalBar
                          percentage={
                            (value /
                              Math.max(...data.map(({ value }) => value))) *
                            100
                          }
                          style={{ marginBottom: 16 }}
                        />
                        <styled.VerticalBarItemValue
                          style={{ marginBottom: 8 }}
                        >
                          {`${currency.label} ${value.toFixed(2)}`}
                        </styled.VerticalBarItemValue>
                        <styled.VerticalBarLabel>
                          {" "}
                          {label}{" "}
                        </styled.VerticalBarLabel>
                      </styled.VerticalBarItemData>
                    ))}
                  </>
                )}
              </>
            )}
          </styled.Scroll>
          {data && data.length > 1 && (
            <>
              <styled.ArrowButton
                className="verticalbarrankingcard-left"
                onClick={handleLeft}
              >
                <div> {"<"}</div>
              </styled.ArrowButton>
              <styled.ArrowButton
                className="verticalbarrankingcard-right"
                onClick={handleRight}
              >
                <div>{">"}</div>
              </styled.ArrowButton>
            </>
          )}
        </styled.Content>
      </SimpleMetricCard>
    </div>
  );
};

export default VerticalBarRankingCard;
