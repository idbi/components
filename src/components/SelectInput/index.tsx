import { theme } from "@/ThemeProvider/theme";
import React from "react";
import Skeleton from "react-loading-skeleton";
import Select from "react-select";

import { Container } from "./styles";
import type { OptionType, SelectProps } from "./types";

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
  singleValue: () => {
    return {
      color: theme.color.PRIMARY[900],
      fontWeight: 500,
      fontSize: 14,
    };
  },
  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: theme.color.NEUTRAL[700],
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
        paddingRight: "5px",
      },
    };
  },
  valueContainer: (provided: any) => {
    return {
      ...provided,
      padding: 0,
      paddingLeft: "7px",
    };
  },
};

export const SelectInput: React.FC<SelectProps> = ({
  formatOptionLabel,
  options,
  loading = false,
  style,
  error,
  firstOption,
  initialValue,
  value,
  onChange,
  isMulti,
  placeholder,
}) => {
  const firstSelectOption: OptionType = firstOption || {
    label: "Seleccione una opción",
    value: "",
  };
  const selectOptions: OptionType[] = [...options];

  return (
    <Container style={style} hasError={!!error}>
      {loading ? (
        <Skeleton
          style={{ borderRadius: 10 }}
          className="loading-skeleton"
          height={46}
          width="100%"
        />
      ) : (
        <Select
          placeholder={placeholder}
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
