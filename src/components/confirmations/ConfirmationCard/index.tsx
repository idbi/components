import React from "react";
import { Button } from "@/components/Button";
import { Container, Note, Options, Separator, Description } from "./styles";
import { IconTrash } from "../../../icons/IconTrash";
import { IConfirmationCard } from "./types";

export const ConfirmationCard: React.FC<IConfirmationCard> = ({
  children,
  icon = <IconTrash height={150} />,
  note = "Esta acción no se puede revertir.",
  btnLeft = {
    onClick: () => {},
    text: "Cancelar",
  },
  btnRight = {
    onClick: () => {},
    text: "Eliminar",
  },
}) => {
  return (
    <Container>
      {icon}
      <Description>{children}</Description>
      <Note>{note}</Note>
      <Options>
        <Button design="flat" fullWidth onClick={() => btnLeft.onClick()}>
          {btnLeft.text}
        </Button>
        <Separator />
        <Button
          design="flat"
          fullWidth
          onClick={() => btnRight.onClick()}
          color="ALERT/900"
        >
          {btnRight.text}
        </Button>
      </Options>
    </Container>
  );
};
