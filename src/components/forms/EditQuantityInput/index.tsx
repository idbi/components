import React, { MouseEvent, useState } from "react";
import EditQuantityModal from "./EditQuantityModal";
import { IEditQuantityInput } from "./types";
import { TrashIcon } from "@/icons-v2/TrashIcon";
import { theme } from "@/theme";
import * as s from "./styles";

export const EditQuantityInput = ({
  value,
  onSetQuantity,
  onDelete,
  minimumQuantity = 1,
  measureUnit,
  onlyIntegers,
  blockInputModal,
  disabled,
  hasError,
  variant,
  renderModal,
  zIndex,
  style,
  noDecrement,
  noIncrement,
}: IEditQuantityInput) => {
  const [showModal, setShowModal] = useState(false);

  const valueNum = Number(value || 0);
  const isMinimumQuantity = value === null || valueNum <= minimumQuantity;

  const handleIncrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newValue = valueNum % 1 !== 0 ? Math.ceil(valueNum) : valueNum + 1;
    onSetQuantity(newValue);
  };

  const handleDecrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isMinimumQuantity) {
      if (onDelete) onDelete();
      return;
    }

    const newValue = valueNum % 1 > 0 ? Math.floor(valueNum) : valueNum - 1;
    onSetQuantity(newValue);
  };

  const confirmQuantityChange = (value: number) => {
    const inputVal = onlyIntegers ? Math.round(value) : value;
    onSetQuantity(inputVal <= minimumQuantity ? minimumQuantity : inputVal);
    setShowModal(false);
  };

  return (
    <>
      <s.Container>
        <s.InputContainer
          isDisabled={disabled}
          onClick={() => {
            if (blockInputModal || disabled) return;
            setShowModal(true);
          }}
          minQuantity={isMinimumQuantity}
          canDelete={!!onDelete}
          variant={variant}
          error={hasError}
          style={style}
        >
          {!noDecrement && (
            <button disabled={disabled} onClick={handleDecrease}>
              {isMinimumQuantity && onDelete ? (
                <s.IconWrapper>
                  <TrashIcon color={theme.color.ALERT[900]} />
                </s.IconWrapper>
              ) : (
                "-"
              )}
            </button>
          )}

          <s.Span>{`${value === null ? "-" : value} ${(value !== null && measureUnit) || ""}`}</s.Span>

          {!noIncrement && (
            <button onClick={handleIncrease} disabled={disabled}>
              +
            </button>
          )}
        </s.InputContainer>
      </s.Container>

      {showModal &&
        !blockInputModal &&
        (renderModal ? (
          renderModal(
            <EditQuantityModal
              onClose={() => setShowModal(false)}
              onConfirm={confirmQuantityChange}
              initialValue={!value ? "" : value.toString()}
              onlyIntegers={onlyIntegers}
              zIndex={zIndex}
            />
          )
        ) : (
          <EditQuantityModal
            onClose={() => setShowModal(false)}
            onConfirm={confirmQuantityChange}
            initialValue={!value ? "" : value.toString()}
            onlyIntegers={onlyIntegers}
            zIndex={zIndex}
          />
        ))}
    </>
  );
};
