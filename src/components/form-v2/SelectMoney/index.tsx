import React, { useState } from "react";
import { Button } from "@/components/button";
import { Container } from "./styles";

type SelectMoneyProps = {
  isDollar?: boolean;
  isDollarDisabled?: boolean;
  setIsDollar?: (status: boolean) => void;
};

export const SelectMoney: React.FC<SelectMoneyProps> = ({
  isDollar = false,
  setIsDollar,
  isDollarDisabled,
}) => {
  const [isDollarMoney, setIsDollarMoney] = useState(isDollar);

  const changeIsDollar = (status: boolean) => {
    setIsDollarMoney(status);
    setIsDollar(status);
  };

  return (
    <Container>
      {isDollarMoney ? (
        <>
          <Button
            model="secondary-empty"
            size="small"
            style={{ border: "none", color: "#404040" }}
            onClick={() => changeIsDollar(false)}
          >
            S/
          </Button>
          <Button
            model="primary"
            size="small"
            onClick={() => changeIsDollar(true)}
            disabled={isDollarDisabled}
          >
            $
          </Button>
        </>
      ) : (
        <>
          <Button
            model="primary"
            size="small"
            onClick={() => changeIsDollar(false)}
          >
            S/
          </Button>
          <Button
            model="secondary-empty"
            size="small"
            style={{ border: "none", color: "#404040" }}
            onClick={() => changeIsDollar(true)}
            disabled={isDollarDisabled}
          >
            $
          </Button>
        </>
      )}
    </Container>
  );
};
