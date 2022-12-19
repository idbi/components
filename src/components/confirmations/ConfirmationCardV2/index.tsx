import React from "react";
import { Button } from "@/components/Button";
import {
  Container,
  Note,
  Options,
  Description,
  Header,
  SubCard,
} from "./styles";
import { useMediaQueryScreen } from "../../../hooks/useMediaQueryScreen";
import { IConfirmationCardV2 } from "./types";

export const ConfirmationCardV2: React.FC<IConfirmationCardV2> = ({
  children,
  note = "Esta acción no se puede revertir.",
  btnLeft = {
    onClick: () => {},
    text: "Cancelar",
    disabled: false,
  },
  btnRight = {
    onClick: () => {},
    text: "Eliminar",
    disabled: false,
  },
}) => {
  const { status: minScreen1023 } = useMediaQueryScreen("(min-width: 1023px)");

  return (
    <Container>
      <SubCard>
        <Header>
          <Description>{children}</Description>
          <Note>{note}</Note>
        </Header>
        <Options>
          {minScreen1023 && (
            <Button
              design="flat"
              fullWidth
              onClick={() => btnLeft.onClick()}
              color="PRIMARY/900"
              style={{ borderRadius: "32px", padding: "20px 0" }}
              disabled={btnLeft.disabled}
            >
              {btnLeft.text}
            </Button>
          )}
          <Button
            design="solid"
            fullWidth
            onClick={() => btnRight.onClick()}
            style={{ borderRadius: "32px", padding: "20px 60px" }}
            disabled={btnRight.disabled}
          >
            {btnRight.text}
          </Button>
        </Options>
      </SubCard>
      {!minScreen1023 && (
        <Button
          design="flat"
          fullWidth
          onClick={() => btnLeft.onClick()}
          color="PRIMARY/900"
          style={{
            margin: "0 15px 15px",
            width: "calc(100% - 30px)",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          {btnLeft.text}
        </Button>
      )}
    </Container>
  );
};
