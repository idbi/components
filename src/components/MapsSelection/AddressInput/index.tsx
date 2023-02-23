import React, { useState, useEffect } from "react";
import { useGoogleMapCtx } from "../context";
import useDebounceFunc from "@/hooks/useDebounceFunc";
import { BaseInput } from "@/components/forms/BaseInput";
import { IAddressInput } from "./types";

export const AddressInput = ({ ...rest }: IAddressInput) => {
  const { addressState, setAddressState, editedAddressRef } = useGoogleMapCtx();
  const [value, setValue] = useState(addressState.address);

  const handleChange = useDebounceFunc((value: string) => {
    setAddressState((s) => ({ ...s, address: value }));
  });

  useEffect(() => {
    setValue(addressState.address);
  }, [addressState.address]);

  return (
    <BaseInput
      value={value}
      placeholder="Dirección"
      onChange={(e) => {
        const val = e.target.value;
        setValue(val);
        handleChange(val);
        editedAddressRef.current = true;
      }}
      {...rest}
    />
  );
};
