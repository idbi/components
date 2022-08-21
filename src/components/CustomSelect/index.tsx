import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import DownArrowIcon from "@/icons/DownArrowIcon";
import SearchIcon from "@/icons/SearchIcon";
import { forwardRef, useCallback, useRef, useState } from "react";
import { TextInput } from "../TextInput";
import { Text } from "../Typography";
import { OptionsManager, Wrapper } from "./styles";
import { ICustomSelect } from "./types";

export const CustomSelect = forwardRef(
  <
    T extends {
      label: string;
      value: string;
    }
  >(
    {
      label,
      searchable = true,
      isMobile,
      autoSize,
      value,
      options,
      placeholder = "Seleccione una opción",
      fullWidth,
      fullWidthOptions,
      onChange,
      formatOptionLabel,
      formatSelectedOption,
    }: ICustomSelect<T>,
    ref: any
  ) => {
    const wrapperRef = useRef(null);
    const [renderedOptions, setRenderedOptions] = useState<T[]>(options);
    const [searchWord, setSearchWord] = useState("");
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    useOnClickOutside(wrapperRef, () => {
      setIsSelectOpen(false);
    });

    const addCountry = useCallback(() => {
      const filteredCountries = options.filter((option) =>
        option.label.toLowerCase().includes(searchWord.toLowerCase())
      );
      setRenderedOptions(filteredCountries);
    }, [options, value]);

    const updateName = useCallback(
      (label: string) => {
        onChange(options.find((option) => option.label === label));
        setIsSelectOpen(false);
        setSearchWord("");
        setRenderedOptions(options);
      },
      [addCountry]
    );

    const handleSearch = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
        const filteredCountries = options.filter((option) =>
          option.label.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setRenderedOptions(filteredCountries);
      },
      []
    );

    const maxOptionsHeight = () => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const wrapperRect = (wrapper as any).getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const maxHeight = windowHeight - wrapperRect.bottom - 20;
        console.log(maxHeight);
        return maxHeight;
      }
    };

    return (
      <Wrapper fullWidth={fullWidth} ref={wrapperRef}>
        {label && (
          <Text
            as="label"
            align="left"
            size="sm"
            color="NEUTRAL/700"
            pl="0.05rem"
            mb="0.25rem"
          >
            {label}
          </Text>
        )}
        <div
          className="select-btn"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          tabIndex={0}
          onKeyUpCapture={(e) => {
            if (e.key === "Enter") {
              setIsSelectOpen(!isSelectOpen);
            }
          }}
        >
          <Text as="span" color="NEUTRAL/700" mr="0.5rem">
            {formatSelectedOption
              ? formatSelectedOption(value)
              : formatOptionLabel
              ? formatOptionLabel(value)
              : value.label}
          </Text>
          <DownArrowIcon size={20} />
        </div>
        {isSelectOpen && (
          <OptionsManager
            maxOptionsHeight={autoSize ? maxOptionsHeight() : 285}
            fullWidthOptions={fullWidthOptions}
          >
            {searchable && (
              <div className="search-box">
                <TextInput
                  leftAddon={<SearchIcon />}
                  type="text"
                  placeholder={placeholder}
                  value={searchWord}
                  onChange={handleSearch}
                  fullWidth
                />
              </div>
            )}
            <div className="options">
              {renderedOptions.map((option) => (
                <Text
                  as="li"
                  color="NEUTRAL/700"
                  key={option.label}
                  className={option.value === value.value ? "selected" : ""}
                  tabIndex={0}
                  onClick={() => updateName(option.label)}
                  onKeyUpCapture={(e) => {
                    if (e.key === "Enter") {
                      updateName(option.label);
                    }
                  }}
                >
                  {formatOptionLabel ? formatOptionLabel(option) : option.label}
                </Text>
              ))}
            </div>
          </OptionsManager>
        )}
      </Wrapper>
    );
  }
);
