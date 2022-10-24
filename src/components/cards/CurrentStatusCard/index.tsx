import React from "react";
import { OrderStatusBadge } from "../../badges/OrderStatusBadge";
import { Container, Date, Title } from "./styles";
import { ICurrentStatusCard } from "./types";

export const CurrentStatusCard: React.FC<ICurrentStatusCard> = ({
  items,
  creationDescription,
  creationDate,
  title,
  children,
}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {items.map((status) => (
        <div key={crypto.randomUUID()}>
          <p>
            {status.description && <span>{status.description}</span>}{" "}
            <OrderStatusBadge statusName={status.statusName} removeBackground />
          </p>
          <Date>{status.statusDate}</Date>
        </div>
      ))}
      {creationDate && (
        <div>
          {creationDescription && <span>{creationDescription}</span>}
          <Date>{creationDate}</Date>
        </div>
      )}
      {children}
    </Container>
  );
};
