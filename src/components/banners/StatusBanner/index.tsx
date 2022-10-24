import React from "react";
import { Container, Title } from "./styles";
import { IconWarning } from "../../../icons/IconWarning";
import { IconClock } from "../../../icons/IconClock";
import { IconBag } from "../../../icons/IconBag";
import { IconTruck } from "../../../icons/IconTruck";
import { IconPreparing } from "../../../icons/IconPreparing";
import { IStatusBanner } from "./types";

const StatusIconsDiccionary = {
  default: <> </>,
  draft: <> </>,
  pending: <IconClock />,
  rejected: <IconWarning />,
  accepted: <IconBag color="#4318FF" />,
  canceled: <IconWarning />,
  preparing: <IconPreparing color="#F79E1B" />,
  readyforpickup: <IconTruck color="#FF82AF" />,
  delivered: <IconBag color="#2DC96F" />,
};

const StatusDescriptionDiccionary = {
  default: {
    title: "...",
    description: "",
  },
  draft: {
    title: "Tu pedido es borrador",
    description: "",
  },
  pending: {
    title: "Tu pedido está en pendiente aprobación",
    description: "Te notificaremos cuando tu pedido sea aceptado",
  },
  rejected: {
    title: "El local ha rechazado tu pedido",
    description: "¡No te quedes con las ganas! Haz un nuevo pedido aquí",
  },
  accepted: {
    title: "El local aceptó tu pedido",
    description: "En un momento comenzaremos a preparar tu pedido",
  },
  canceled: {
    title: "El local ha anulado tu pedido",
    description: "¡No te quedes con las ganas! Haz un nuevo pedido aquí",
  },
  preparing: {
    title: "Estamos preparando tu pedido",
    description: "Te notificaremos cuando tu pedido este listo",
  },
  readyforpickup: {
    title: "¡Pedido listo! ",
    description: "Ya puedes recoger tu pedido. ¡Que lo disfrutes!",
  },
  delivered: {
    title: "Disfruta tu pedido",
    description: "¡Gracias por ordenar!",
  },
};

export const StatusBanner: React.FC<IStatusBanner> = ({
  status,
  title = "default",
  description = "default",
  icon,
  radius,
  children,
}) => {
  return (
    <Container statusName={status} radius={radius}>
      {icon || StatusIconsDiccionary[status]}
      {(title === "default" ||
        description === "default" ||
        title.length > 1 ||
        description.length > 1) && (
        <div>
          {title === "default" ? (
            <Title>{StatusDescriptionDiccionary[status].title}</Title>
          ) : (
            <Title>{title}</Title>
          )}
          {description === "default" ? (
            <p>{StatusDescriptionDiccionary[status].description}</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}
      {children}
    </Container>
  );
};
