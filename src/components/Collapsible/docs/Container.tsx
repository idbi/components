import React, { useState } from "react";
import { Collapsible as CollapsibleComponent } from "../index";
import { ICollapsible } from "../types";

export const Collapsible: React.FC<ICollapsible> = (props) => {
  const [show, setShow] = useState(false);
  return <CollapsibleComponent {...props} open={show} setOpen={setShow} />;
};
