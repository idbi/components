import { useEffect } from "react";

export default function useCodeInput(
  onChange: (code: string) => void,
  className: string,
  value?: string
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
          const codeInputs = getCodeInputs();
          const currentInput = document.activeElement as HTMLInputElement;
          currentInput.value = "";
          const currentInputIndex = codeInputs.indexOf(currentInput);
          if (currentInputIndex > 0) {
            const previousInput = codeInputs[currentInputIndex - 1];
            previousInput.focus();
          }
        }, 0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Backspace") {
        const keyValue = e.key.toLowerCase();
        setTimeout(() => {
          if (keyValue.length === 1) {
            const codeInputs = getCodeInputs();
            const currentInput = document.activeElement as HTMLInputElement;
            currentInput.value = keyValue;
            const currentInputIndex = codeInputs.indexOf(currentInput);
            if (currentInputIndex < codeInputs.length - 1) {
              const nextInput = codeInputs[currentInputIndex + 1];
              nextInput.focus();
            }
          }
        }, 0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
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

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
    return;
  }, []);

  useEffect(() => {
    if (value) {
      const codeInputs = getCodeInputs();
      const valueArray = value.split("");
      codeInputs.forEach((input, index) => {
        const newValue = valueArray[index];
        if (newValue) {
          input.value = newValue;
        }
      });
    }
  }, [value]);
}
