import React, { useState } from "react";
import { CardModal as CardModalComponent } from "../index";
import { ICardModal } from "../types";

export const CardModal: React.FC<ICardModal> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)} type="button">
        Mostrar modal
      </button>
      <CardModalComponent
        {...props}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};
