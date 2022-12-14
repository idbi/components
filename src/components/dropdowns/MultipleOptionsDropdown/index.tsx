import React, { ReactNode } from "react";
import LoaderCircle from "@/components/loaders/LoaderCircle/loader";
import OptionWithMenu from "./OptionWithMenu";
import { IMultiOption, IOption } from "./types";
import * as s from "./styles";

export type DropdownOptions = (IOption | IMultiOption)[];
interface IProps {
  header?: ReactNode,
  options: DropdownOptions;
}

export const MultipleOptionsDropdown = ({ options, header }: IProps) => {
  return (
    <s.Menu>
      {header && <s.Header>{header}</s.Header>}
      {options.map((option, i) =>
        "options" in option ? (
          <OptionWithMenu key={`option-${i}`} {...option} />
        ) : (
          <s.Option
            key={`option-${i}`}
            disabled={option.disabled || option.loading}
            alert={option.alert}
            onClick={
              option.disabled || option.loading
                ? (e) => e.stopPropagation()
                : option.onClick
            }
            loading={option.loading}
          >
            {option.text}{" "}
            {option.loading ? (
              <div style={{ width: "24px" }}>
                <LoaderCircle width="20px" height="20px" />
              </div>
            ) : (
              option.icon
            )}
          </s.Option>
        )
      )}
    </s.Menu>
  );
};
