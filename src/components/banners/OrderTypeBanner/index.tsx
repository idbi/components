/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import React from "react";
import { Container } from "./styles";
import deliveryIcon from "./assets/delivery.webp";
import pickupIcon from "./assets/pickup.webp";
import ontableIcon from "./assets/ontable.webp";
import { IOrderTypeBanner } from "./types";

export const OrderTypeBanner: React.FC<IOrderTypeBanner> = ({
  type,
  message,
  children,
}) => {
  return (
    <Container>
      {type === "on-table"
        ? <img src={ontableIcon} alt="on table" height={55} />
        : type === "delivery"
        ? <img src={deliveryIcon} alt="delivery"  height={55} />
        : type === "on-room" || type === "pick-up"
        ? <img src={pickupIcon} alt="pick up"  height={55} />
        : ""
      }
      {message ? (
        <p>{message}</p>
      ) : (
        <p>
          {type === "on-table"
            ? "Pedido para consumo en mesa"
            : type === "delivery"
            ? "Pedido para entrega a domicilio"
            : type === "on-room" || type === "pick-up"
            ? "Pedido para recojo en tienda"
            : ""}
        </p>
      )}
      {children}
    </Container>
  )
}