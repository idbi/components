import React, { useState } from "react";
import { ConfirmationModalV3 } from "..";
import { IConfirmationModalV3 } from "../types";

export const Container = (props: IConfirmationModalV3) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>show modal</button>
      <ConfirmationModalV3
        {...props}
        cardProps={{ onClose: () => setShow(false), show }}
      />
    </>
  );
};
