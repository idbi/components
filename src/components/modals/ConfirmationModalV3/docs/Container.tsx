import React, { useState } from "react";
import { ConfirmationModalV3 as ConfirmationModalV3Component } from "..";
import { IConfirmationModalV3 } from "../types";

export const ConfirmationModalV3 = (props: IConfirmationModalV3) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>
        show modal
      </button>
      <ConfirmationModalV3Component
        {...props}
        cardProps={{ onClose: () => setShow(false), show }}
      />
    </>
  );
};
