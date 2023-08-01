import React from "react";
import Skeleton from "react-loading-skeleton";
import { formatNumber as formatter } from "@/utils/formatNumber";
import { IconPER } from "../../../icons/flags-icons/IconPER";
import { IconUSA } from "../../../icons/flags-icons/IconUSA";
import type { IKpiCard } from "./types";
import * as s from "./styles";

export const KpiCard: React.FC<IKpiCard> = ({
  title,
  total_PEN,
  total_USD,
  tip_PEN,
  tip_USD,
  main,
  loading,
  autoWidth,
  noDecimals = false,
  containerStyle,
  quantity,
  big,
}) => {
  const formatNumber = (num: number) => {
    return formatter(num, noDecimals ? 0 : 2);
  };

  return (
    <s.Container main={main} autoWidth={autoWidth} style={containerStyle}>
      {loading ? (
        <div>
          <s.Title>
            <Skeleton width="150px" height="15px" />
          </s.Title>
          <s.Body>
            <s.Money style={{ marginRight: "30px" }}>
              <IconPER />{" "}
              <span>
                <Skeleton width="50px" height="15px" />
              </span>
            </s.Money>
            <s.Money>
              <IconUSA />{" "}
              <span>
                <Skeleton width="50px" height="15px" />
              </span>
            </s.Money>
          </s.Body>
          <s.Footer>
            <Skeleton width="150px" height="15px" />
          </s.Footer>
        </div>
      ) : (
        <>
          {quantity && (
            <s.QuantitySection>
              <s.Title>{quantity.title}</s.Title>
              <s.Body>
                <s.Money big={big}>{quantity.value}</s.Money>
              </s.Body>
            </s.QuantitySection>
          )}
          <div>
            <s.Title>{title || ""}</s.Title>
            <s.Body>
              {total_PEN && total_PEN > 0 ? (
                <s.Money style={{ marginRight: "30px" }} big={big}>
                  <IconPER /> <span>{formatNumber(total_PEN)}</span>
                </s.Money>
              ) : null}
              {total_USD && total_USD > 0 ? (
                <s.Money big={big}>
                  <IconUSA /> <span>{formatNumber(total_USD)}</span>
                </s.Money>
              ) : null}
            </s.Body>
            <s.Footer>
              {(tip_PEN && tip_PEN > 0) || (tip_USD && tip_USD > 0) ? (
                <>
                  <span>Propina: </span>
                  {tip_PEN && tip_PEN > 0 ? <span> {` S/${formatNumber(tip_PEN)}`}</span> : null}
                  {tip_USD && tip_USD > 0 ? <span> {` $/${formatNumber(tip_USD)}`}</span> : null}
                </>
              ) : null}
            </s.Footer>
          </div>
        </>
      )}
    </s.Container>
  );
};
