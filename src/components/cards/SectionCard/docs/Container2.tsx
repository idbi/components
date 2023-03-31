import React, { useState } from "react";
import { IdiArrowBottom } from "@/icons/IdiArrowBottom";
import { Text } from "@/components/Typography";
import styled, { css } from "styled-components";
import { SectionCard as SectionCardComponent } from "..";
import { ISectionCard } from "../types";

const Circle = styled.div`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 7px;
  ${(props) => {
    return css`
      background-color: ${props.color};
    `;
  }};
`;

const CircleContainerWithText = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Line = styled.div`
  display: flex;
  width: 2px;
  height: 18px;
  background-color: #4a4a4a;
  margin: 0 17px 0 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const styledText: any = {
  color: "NEUTRAL/400",
  size: "xs",
  weight: "regular",
  style: {
    lineHeight: "22px",
  },
};

const styledAmount: any = {
  position: "absolute",
  right: 0,
  top: 0,
};

export const SectionCard = (props: ISectionCard) => {
  const [showSection, setShowSection] = useState(false);

  return (
    <SectionCardComponent
      containerStyle={{
        borderRadius: "20px",
      }}
      headerTop={
        <div
          style={{
            marginBottom: "15px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text color="SECONDARY/900">Salida: N° 1</Text>
          <Text color="NEUTRAL/500">1 x BOTELLITAS</Text>
          <Text color="NEUTRAL/500" style={styledAmount}>
            s/40.00
          </Text>
        </div>
      }
      headerAside={
        <IdiArrowBottom
          size={15}
          onClick={() => setShowSection((s) => !s)}
          style={{
            transition: "0.3s ease all",
            transform: showSection ? "rotate(180deg)" : "rotate(0deg)"
          }}
        />
      }
      title={
        <>
          <Line />
          <CircleContainerWithText>
            <Circle color="#151E5A" />
            <Text color="PRIMARY/800" weight="regular">
              El producto fue aceptado
            </Text>
          </CircleContainerWithText>
        </>
      }
      showBody={showSection}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "10px",
          marginTop: "15px",
          borderTop: "1px solid #eeeeee",
        }}
      >
        <Text color="NEUTRAL/400" size="xs" weight="regular">
          0 / 1 AGUA MINERAL EVIAN (750 ML)-PRUEBA PAGADAS
        </Text>
        <Text {...styledText}>Razón descuento:</Text>
        <Row>
          <Text {...styledText}>Monto pagado</Text>
          <Text {...styledText}>s/ 0.00</Text>
        </Row>
        <Row>
          <Text {...styledText}>Monto a pagar</Text>
          <Text {...styledText}>s/ 15.00</Text>
        </Row>
        <Row>
          <Text {...styledText}>Creado</Text>
          <Text {...styledText}>11/01/2023 - 09:57 am</Text>
        </Row>
      </div>
    </SectionCardComponent>
  );
};
