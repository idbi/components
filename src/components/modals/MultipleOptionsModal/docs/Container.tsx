import React, { useState } from "react";
import { MultipleOptionsModal as MultipleOptionsModalComponent } from "../index";
import { IMultipleOptionsModal } from "../types";

export const MultipleOptionsModal: React.FC<IMultipleOptionsModal> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)} type="button">
        Mostrar modal
      </button>
      {show && (
        <MultipleOptionsModalComponent
          {...props}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};
