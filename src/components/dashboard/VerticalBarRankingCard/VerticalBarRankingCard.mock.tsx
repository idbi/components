import React from "react";
import { VerticalBarRankingCardProps } from ".";
import UbicationIcon from "@/icons/UbicationIcon";
import * as s from "../styles";

const base: VerticalBarRankingCardProps = {
  currency: {
    label: "USD",
    value: "$",
  },
  isLoading: false,
  Heading: (
    <s.BarHeader>
      <UbicationIcon />
      <s.CardHeading> Venta por zona de trabajo</s.CardHeading>
    </s.BarHeader>
  ),
  data: [
    {
      label: "Zona 1",
      value: 100,
    },
    {
      label: "Zona 2",
      value: 200,
    },
    {
      label: "Zona 3",
      value: 300,
    },
  ],
};

export const mockVerticalBarRankingCardProps = {
  base,
};
