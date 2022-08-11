import { theme } from "@/ThemeProvider/theme";
import React, { CSSProperties } from "react";
import { FieldError } from "react-hook-form";
import { FiAlertCircle, FiHelpCircle } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import Select from "react-select";

import { Container } from "./styles";

interface OptionType {
  value: string;
  label: string;
}

interface Icons {
  [any: string]: React.ReactElement;
}

const icons: Icons = {
  information: <FiAlertCircle />,
  question: <FiHelpCircle />,
};

interface SelectProps {
  options: OptionType[];
  placeholder?: string;
  style?: CSSProperties;
  loading?: boolean;
  error?: FieldError;
  firstOption?: OptionType;
  initialValue?: OptionType | OptionType[];
  onChange: (selectedOption: any) => void;
  value?: OptionType | OptionType[];
  isMulti?: boolean;
  formatOptionLabel?: (option: OptionType) => React.ReactElement;
}

const customStyles = {
  control: (base: { [key: string]: any }, state: any) => ({
    ...base,
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${
      state.isFocused ? theme.color.QUATERNARY[900] : theme.color.NEUTRAL[300]
    }`,
    boxShadow: "none",
    cursor: "pointer",
  }),
  singleValue: (provided: any, state: any) => {
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
    };
  },
};

const SelectInput: React.FC<SelectProps> = ({
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

export default SelectInput;
