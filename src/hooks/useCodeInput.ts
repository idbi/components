/* eslint-disable no-param-reassign */
import { useEffect } from "react";

export default function useCodeInput(
  onChange: (code: string) => void,
  className: string,
  value?: string,
  container?: string
) {
  const getCodeInputs = () => {
    const inputs = document.querySelectorAll("input");
    const codeInputs = Array.from(inputs).filter(
      (input) => input.className === className
    );
    return codeInputs;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setTimeout(() => {
          const currentInput = document.activeElement as HTMLInputElement;
          const codeInputs = getCodeInputs();
          currentInput.value = "";
          const currentInputIndex = codeInputs.indexOf(currentInput);
          if (currentInputIndex > 0) {
            const previousInput = codeInputs[currentInputIndex - 1];
            previousInput.focus();
          }
        }, 0);
      }
    };

    document.getElementById(container || 'root')?.addEventListener("keydown", handleKeyDown);
    return () => document.getElementById(container || 'root')?.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Backspace") {
        const keyValue = e.key.toLowerCase();
        setTimeout(() => {
          const currentInput = document.activeElement as HTMLInputElement;
          if (keyValue.length === 1) {
            currentInput.value = keyValue;
            if (!currentInput.value) {
              return;
            }
            const codeInputs = getCodeInputs();
            const currentInputIndex = codeInputs.indexOf(currentInput);
            if (currentInputIndex < codeInputs.length - 1) {
              const nextInput = codeInputs[currentInputIndex + 1];
              nextInput.focus();
            }
          }
        }, 0);
      }
    };

    document.getElementById(container || 'root')?.addEventListener("keydown", handleKeyDown);
    return () => document.getElementById(container || 'root')?.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (onChange) {
      const handleKeyDown = (e: KeyboardEvent) => {
        const keyValue = e.key.toLowerCase();
        if (keyValue.length === 1 || keyValue === "backspace") {
          setTimeout(() => {
            const codeInputs = getCodeInputs();
            const codeStringified = codeInputs
              .map((input) => input.value)
              .join("");
            onChange(codeStringified);
          }, 0);
        }
      };

      document.getElementById(container || 'root')?.addEventListener("keydown", handleKeyDown);
      return () => document.getElementById(container || 'root')?.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  useEffect(() => {
    if (value) {
      const codeInputs = getCodeInputs();
      const codeInputValues = codeInputs.map((input) => input.value);
      const valueArray = value.split("");
      const currentValueArray =
        valueArray.length === codeInputValues.length
          ? valueArray
          : codeInputValues;
      codeInputs.forEach((input, index) => {
        const newValue = currentValueArray[index];
        if (newValue) {
          input.value = newValue;
        }
      });
    }
  }, [value]);
}
