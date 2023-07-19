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
  maximumQuantity = null,
  measureUnit,
  onlyIntegers,
  blockInputModal,
  disabled,
  hasError,
  variant,
  renderModal,
  zIndex,
  style,
  styleContainer,
  noDecrement,
  noIncrement,
}: IEditQuantityInput) => {
  const [showModal, setShowModal] = useState(false);

  const valueNum = Number(value || 0);
  const isMinimumQuantity = value === null || valueNum <= minimumQuantity;
  const isMaximumQuantity = maximumQuantity !== null && Number(value) >= maximumQuantity;

  const handleIncrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newValue = valueNum % 1 !== 0 ? Math.ceil(valueNum) : valueNum + 1;
    onSetQuantity(maximumQuantity !== null ? Math.min(maximumQuantity, newValue) : newValue);
  };

  const handleDecrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isMinimumQuantity) {
      if (onDelete) onDelete();
      return;
    }

    const newValue = valueNum % 1 > 0 ? Math.floor(valueNum) : valueNum - 1;
    onSetQuantity(Math.max(newValue, minimumQuantity));
  };

  const confirmQuantityChange = (value: number) => {
    const inputVal = onlyIntegers ? Math.round(value) : value;
    const minValidatedValue = Math.max(inputVal, minimumQuantity);
    onSetQuantity(maximumQuantity !== null ? Math.min(maximumQuantity, minValidatedValue) : minValidatedValue);
    setShowModal(false);
  };

  return (
    <>
      <s.Container style={styleContainer}>
        <s.InputContainer
          isDisabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
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
            <s.ActionButton
              disabled={disabled || (isMinimumQuantity && !onDelete)}
              alert={isMinimumQuantity && !!onDelete}
              onClick={handleDecrease}
            >
              {isMinimumQuantity && onDelete ? (
                <s.IconWrapper>
                  <TrashIcon color={theme.color.ALERT[900]} />
                </s.IconWrapper>
              ) : (
                "-"
              )}
            </s.ActionButton>
          )}

          <s.Span>{`${value === null ? "-" : value} ${(value !== null && measureUnit) || ""}`}</s.Span>

          {!noIncrement && (
            <s.ActionButton type="button" onClick={handleIncrease} disabled={disabled || isMaximumQuantity}>
              +
            </s.ActionButton>
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
