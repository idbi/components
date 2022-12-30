import React, { useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { ButtonsSelect } from "../../../ButtonsSelect";
import { dishOrderOptions } from "./utils";
import { IDishPopup } from "./types";
import * as s from "./styles";

export const DishPopup = ({ selected, onSelect, onClose }: IDishPopup) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  useOnClickOutside(containerRef, onClose);

  return (
    <s.Container ref={containerRef}>
      <ButtonsSelect
        title="Order de salida"
        options={dishOrderOptions}
        selected={selected.toString()}
        onSelect={(val) => {
          onSelect(Number(val));
          onClose();
        }}
      />
    </s.Container>
  );
};
