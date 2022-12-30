import React, { useState } from "react";
import { BulletOptionsModal } from "..";
import { IBulletOptionsModal } from "../types";

export const Container = (props: IBulletOptionsModal) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(props.selected);

  return (
    <>
      <button onClick={() => setShow(true)}>show modal</button>
      {show && (
        <BulletOptionsModal
          {...props}
          onClose={() => setShow(false)}
          onSelect={(value) => setSelected(value)}
          selected={selected}
        />
      )}
    </>
  );
};
