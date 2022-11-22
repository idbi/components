import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { CardModal } from "@/components/modals/CardModal";
import { Button } from "@/components/Button";
import * as s from "./styles";

interface IProps {
  onConfirm: (quantity: number) => void;
  onClose: () => void;
  zIndex?: number;
  onlyIntegers?: boolean;
  initialValue?: string;
}

const EditQuantityModal = ({
  onConfirm,
  onClose,
  zIndex,
  onlyIntegers,
  initialValue,
}: IProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [input, setInput] = useState(initialValue || "");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    let regEx = /^[0-9]\d*(\.(\d*))?$/;
    if (onlyIntegers) regEx = /^[0-9]*$/;
    if (value !== "" && !regEx.test(value)) return;

    setInput(value);
  };

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  const numberValue = Number(input);

  return (
    <CardModal onClose={onClose} maxWidth="350px" zIndex={zIndex || 6}>
      <s.ModalTitle>Especifica la cantidad</s.ModalTitle>
      <s.ModalContent>
        <input
          type="text"
          inputMode={onlyIntegers ? "numeric" : "decimal"}
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <Button
          design="solid"
          size="xs"
          onClick={() => onConfirm(numberValue)}
          disabled={numberValue <= 0}
        >
          Agregar
        </Button>
      </s.ModalContent>
    </CardModal>
  );
};

export default EditQuantityModal;
