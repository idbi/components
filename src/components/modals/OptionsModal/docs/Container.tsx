import React, { useState } from "react";
import { OptionsModal as OptionsModalComponent } from "..";
import { IOptionsModal } from "../types";

export const OptionsModal = (props: IOptionsModal) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(props.selected);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>
        show modal
      </button>
      {show && (
        <OptionsModalComponent
          {...props}
          onClose={() => setShow(false)}
          onSelect={(value) => setSelected(value)}
          selected={selected}
        />
      )}
    </>
  );
};
