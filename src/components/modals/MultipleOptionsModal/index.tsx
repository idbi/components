import React, { useMemo, useState } from "react";
import { Text } from "@/components/Typography";
import LoaderCircle from "@/components/loaders/LoaderCircle/loader";
import ArrowBackIcon from "@/icons/ArrowBackIcon";
import { CardModal } from "../CardModal";
import * as s from "./styles";
import { IMultipleOptionsModal } from "./types";

const Loader = (
  <div style={{ display: "inline-block" }}>
    <LoaderCircle width="20px" height="20px" />
  </div>
);

export const MultipleOptionsModal: React.FC<IMultipleOptionsModal> = ({
  options,
  onClose,
  contentLocation,
  contentLocationInDesktop,
  defaultDescription = "",
  defaultTitle = "",
  optionsInCenter = false,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const selectedSubMenu = useMemo(() => {
    if (selectedIndex === null) return null;
    const selected = options[selectedIndex];
    if (selected && "options" in selected) return selected;
  }, [selectedIndex, options]);

  return (
    <CardModal
      maxWidth="500px"
      padding="20px 0"
      onClose={onClose}
      contentLocation={contentLocation || "bottom"}
      contentLocationInDesktop={contentLocationInDesktop || "center"}
      closeIcon
    >
      <s.Container>
        <s.Header>
          <s.TitleWrapper>
            {selectedSubMenu && (
              <ArrowBackIcon onClick={() => setSelectedIndex(null)} />
            )}
            <Text as="h2" size="md">
              {selectedSubMenu?.text || defaultTitle}
            </Text>
          </s.TitleWrapper>
          {defaultDescription.length > 0 && (
            <Text color="NEUTRAL/400" size="sm" weight="regular">
              {selectedSubMenu?.description || defaultDescription}
            </Text>
          )}
        </s.Header>

        <s.OptionsContainer>
          {!selectedSubMenu &&
            options.map((option, i) =>
              "onClick" in option ? (
                <s.Option
                  key={`option-${i}`}
                  alert={option.alert}
                  disabled={option.disabled || option.loading}
                  onClick={() => {
                    if (!option.loading && !option.disabled) option.onClick();
                  }}
                  optionsInCenter={optionsInCenter}
                >
                  {option.text} {option.loading ? Loader : option.icon}
                </s.Option>
              ) : (
                <s.Option
                  key={`option-${i}`}
                  onClick={() => setSelectedIndex(i)}
                  optionsInCenter={optionsInCenter}
                >
                  {option.text}{" "}
                  <div style={{ transform: "rotateY(180deg)" }}>
                    <ArrowBackIcon />
                  </div>
                </s.Option>
              )
            )}

          {selectedSubMenu?.options.map((option, i) => (
            <s.Option
              key={`suboption-${i}`}
              alert={option.alert}
              disabled={option.disabled || option.loading}
              onClick={() => {
                if (!option.loading && !option.disabled) option.onClick();
              }}
              optionsInCenter={optionsInCenter}
            >
              {option.text} {option.loading ? Loader : option.icon}
            </s.Option>
          ))}
        </s.OptionsContainer>
      </s.Container>
    </CardModal>
  );
};
