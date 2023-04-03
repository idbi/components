import React from "react";
import type { IOrderCard } from "./types";
import * as s from "./styles";
import { IdiUser } from "@/icons/IdiUser";
import { Badge } from "@/components/badges/Badge";

const statusName = {
  default: "",
  draft: "Borrador",
  pending: "Pendiente",
  rejected: "Rechazada",
  accepted: "Aceptada",
  canceled: "Cancelada",
  preparing: "Preparando",
  readyforpickup: "Listo para recojo",
  delivered: "Entregada",
  finished: "Finalizada",
};

export const OrderCard: React.FC<IOrderCard> = ({
  title,
  spot,
  time,
  seller,
  total,
  children,
  numClients,
  noHover = false,
  status = "default",
  isCourtesy = false,
  hideNumClients = false,
  onClick = () => {},
}) => {
  return (
    <s.Container onClick={() => onClick()} status={status} noHover={noHover}>
      <s.Body>
        <s.Badge status={status}>{statusName[status] || null}</s.Badge>
        <s.Title>{title}</s.Title>
        {spot ? <s.Spot>{spot}</s.Spot> : null}
        {isCourtesy ? (
          <Badge
            color="#fff"
            background="#F6BF76"
            borderRadius="5px"
            padding="5px 6px"
            text="Cortesía"
            weight="700"
            style={{
              display: "inline-block",
              fontSize: "0.65rem",
            }}
          />
        ) : null}
        {time ? <s.Time>{time}</s.Time> : null}
        {seller ? <s.Seller>{seller}</s.Seller> : null}
        {children}
      </s.Body>
      {numClients || total?.amount ? (
        <s.Footer>
          <s.NumClients>
            {numClients && !hideNumClients ? (
              <>
                <IdiUser size={18} />
                {numClients || "-"}
              </>
            ) : null}
          </s.NumClients>
          {total?.amount ? (
            <span>{`${total?.symbol} ${Number(total?.amount).toFixed(2)}`}</span>
          ) : null}
        </s.Footer>
      ) : null}
    </s.Container>
  );
};
