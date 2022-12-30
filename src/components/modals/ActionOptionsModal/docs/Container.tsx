import React, { useState } from "react";
import { ActionOptionsModal } from "..";
import { IActionOptionsModal } from "../types";

export const Container = (props: IActionOptionsModal) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>show modal</button>
      {show && <ActionOptionsModal {...props} onClose={() => setShow(false)} />}
    </>
  );
};
