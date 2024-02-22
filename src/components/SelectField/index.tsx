import { theme } from "@/theme";
import React from "react";
import Select from "react-select";
import { Text } from "../Typography";
import { Skeleton } from "../skeleton/styles";

import { Container } from "./styles";
import type { OptionType, SelectFieldProps } from "./types";

const customStyles = {
  control: (base: { [key: string]: any }, state: any) => ({
    ...base,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${
      state.isFocused ? theme.color.QUATERNARY[900] : theme.color.NEUTRAL[300]
    }`,
    boxShadow: "none",
    cursor: "pointer",
  }),
  singleValue: (provided: any) => {
    return {
      ...provided,
      color: theme.color.PRIMARY[900],
      fontWeight: 400,
      fontSize: "0.875rem",
      fontFamily: "Poppins",
      fontStyle: "normal",
    };
  },
  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: theme.color.NEUTRAL[500],
    };
  },
  indicatorSeparator: (provided: any) => {
    return {
      ...provided,
      display: "none",
      padding: 0,
    };
  },

  indicatorsContainer: (provided: any) => {
    return {
      ...provided,
      "> div": {
        padding: "0",
        paddingRight: "10px",
      },
    };
  },
  valueContainer: (provided: any) => {
    return {
      ...provided,
      padding: 0,
      paddingLeft: "15px",
    };
  },
};

export const SelectField: React.FC<SelectFieldProps> = ({
  formatOptionLabel,
  options,
  loading = false,
  style,
  firstOption = {
    label: "Seleccione una opción",
    value: "",
  },
  initialValue,
  value,
  onChange,
  isMulti,
  placeholder,
  label,
}) => {
  const firstSelectOption: OptionType | null = firstOption;
  const selectOptions: OptionType[] = [...options];

  return (
    <Container style={style}>
      {label && (
        <Text as="label" align="left" size="sm" color="NEUTRAL/700">
          {label}
        </Text>
      )}
      {loading ? (
        <Skeleton
          style={{ borderRadius: 10, display: "block" }}
          height="45px"
          width="100%"
        />
      ) : (
        <Select
          placeholder={placeholder}
          name="name"
          value={value || undefined}
          defaultValue={initialValue || firstSelectOption}
          options={selectOptions}
          onChange={onChange}
          styles={customStyles}
          isMulti={isMulti}
          formatOptionLabel={formatOptionLabel}
        />
      )}
    </Container>
  );
};
