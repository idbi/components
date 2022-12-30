import React, { useState } from "react";
import { OptionsModal } from "..";
import { IOptionsModal } from "../types";

export const Container = (props: IOptionsModal) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(props.selected);

  return (
    <>
      <button onClick={() => setShow(true)}>show modal</button>
      {show && (
        <OptionsModal
          {...props}
          onClose={() => setShow(false)}
          onSelect={(value) => setSelected(value)}
          selected={selected}
        />
      )}
    </>
  );
};
