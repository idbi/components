import { ICodeInputProps } from "./types";

const base: ICodeInputProps = {
  id: "code-input-id",
};

const error: ICodeInputProps = {
  id: "code-input-id-2",
  errorMessage: "El código es incorrecto",
  value: "1234",
};

const success: ICodeInputProps = {
  id: "code-input-id-3",
  success: true,
  value: "1234",
};

export const mockCodeInputProps = {
  base,
  error,
  success,
};
