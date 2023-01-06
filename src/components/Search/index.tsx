import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { IconSearch } from "@/icons/IconSearch";
import IconClose from "@/icons/IconClose";
import type { ISearch, IFoundItems } from "./types";
import { IconButton } from "../buttons/IconButton/styles";
import * as s from "./styles";

interface ISearchResult extends IFoundItems {
  hideOnBlur?: boolean;
  loading?: boolean;
  searchRef: React.RefObject<HTMLInputElement>;
  handleCleanOption: () => void;
  search: string;
}

export const SearchResult: React.FC<ISearchResult> = ({
  show = true,
  data,
  onSelectItem = {
    hideOnSelect: true,
  },
  getLabel,
  containerStyle,
  hideOnBlur = true,
  enableScannerBehavior = false,
  addCreateOption = {
    show: false,
    location: "top",
  },
  loading,
  searchRef,
  handleCleanOption,
  search,
}) => {
  if (!show) return null;

  const resultsContainer = useRef<HTMLDivElement>(null);
  const [hideResults, setHideResults] = useState(false);

  useOnClickOutside([resultsContainer, searchRef], () => {
    if (hideOnBlur) return setHideResults(true);
  });

  const handleClean = () => {
    handleCleanOption();
    setHideResults(true);
  };

  useEffect(() => {
    setHideResults(false);
  }, [searchRef?.current?.value])

  useEffect(() => {
    if (data?.length === 1 && enableScannerBehavior) {
      handleClean();
      if (onSelectItem?.onSelect) onSelectItem.onSelect(data[0]);
    }
  }, [data]);

  const showCreateOption = () => (
    <s.CreateContainer
      onClick={() => {
        if (addCreateOption?.onCreate) {
          addCreateOption?.onCreate(search);
          handleClean();
        }
      }}
    >
      {addCreateOption?.text || "Crear"}
    </s.CreateContainer>
  );

  return (
    <s.ContainerList
      style={containerStyle}
      ref={resultsContainer}
      active={Boolean(!hideResults && data && search.length >= 1)}
    >
      {addCreateOption.show &&
        addCreateOption.location === "top" &&
        showCreateOption()}
      {!loading && data && data.length > 0 ? (
        data.map((item: any, i: number) => {
          return (
            <s.ItemList
              key={`${i}search`}
              onClick={() => {
                if (onSelectItem?.onSelect) onSelectItem.onSelect(item);
                if (onSelectItem?.hideOnSelect) handleClean();
              }}
            >
              {getLabel
                ? getLabel(item)
                : `${item.name} ${item.quantity} ${item.kardex_unit?.symbol}`}
            </s.ItemList>
          );
        })
      ) : (
        <s.ItemList style={{ color: "#cbbcbb" }}>
          {loading ? "Buscando" : "Sin resultados"}
        </s.ItemList>
      )}
      {addCreateOption.show &&
        addCreateOption.location === "bottom" &&
        showCreateOption()}
    </s.ContainerList>
  );
};

export const Search: React.FC<ISearch> = ({
  onSearch,
  initSearch,
  placeholder,
  loading = false,
  disabled = false,
  addSearchIcon = false,
  addCleanOption = false,
  size = "small",
  delay = 400,
  alert = false,
  foundItems,
}) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<any>(null);
  const [search, setSearch] = useState<string>(initSearch || "");

  const handleCleanOption = () => {
    setSearch("");
    onSearch("");
  };

  const handleChangeSearch = (value: string) => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    setSearch(value);
    timeoutRef.current = setTimeout(() => onSearch(value), delay);
  };

  return (
    <s.Wrapper>
      <s.InputContainer disabled={disabled}>
        {addSearchIcon && (
          <div className="icon">
            <IconSearch />
          </div>
        )}
        <s.Search
          ref={searchRef}
          value={search}
          onChange={(e) => handleChangeSearch(e?.target?.value || "")}
          placeholder={placeholder}
          addSearchIcon={addSearchIcon}
          addCleanOption={addCleanOption}
          containerSize={size}
          disabled={disabled}
          alert={alert}
        />
        {addCleanOption && (
          <IconButton onClick={() => handleCleanOption()} className="clean">
            <IconClose />
          </IconButton>
        )}
      </s.InputContainer>
      <s.ContainerLoader>
        <s.Loader active={loading} />
      </s.ContainerLoader>
      <SearchResult
        {...foundItems}
        loading={loading}
        searchRef={searchRef}
        handleCleanOption={handleCleanOption}
        search={search}
      />
    </s.Wrapper>
  );
};
