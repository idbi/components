import React, { useState } from "react";
import { BulletOptionsModal as BulletOptionsModalComponent } from "..";
import { IBulletOptionsModal } from "../types";

export const BulletOptionsModal = (props: IBulletOptionsModal) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(props.selected);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>
        show modal
      </button>
      {show && (
        <BulletOptionsModalComponent
          {...props}
          onClose={() => setShow(false)}
          onSelect={(value) => setSelected(value)}
          selected={selected}
        />
      )}
    </>
  );
};
