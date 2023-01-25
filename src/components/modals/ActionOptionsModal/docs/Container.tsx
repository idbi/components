import React, { useState } from "react";
import { ActionOptionsModal as ActionOptionsModalComponent } from "..";
import { IActionOptionsModal } from "../types";

export const ActionOptionsModal = (props: IActionOptionsModal) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>
        show modal
      </button>
      {show && (
        <ActionOptionsModalComponent
          {...props}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};
