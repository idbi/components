import React from "react";
import { DetailedField } from "../DetailedField";
import type { IDetailedInput } from "./types";
import * as s from "./styles";

export const DetailedInput: React.FC<IDetailedInput> = ({ inputProps = {}, ...fieldProps }) => {
  return (
    <s.Container>
      <DetailedField htmlFor={inputProps.id} {...fieldProps}>
        <s.Input {...inputProps} />
      </DetailedField>
    </s.Container>
  );
};
