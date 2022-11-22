import React from "react";
import { Button } from "@/components/Button";
import { IConfirmationCardV3 } from "./types";
import * as s from "./styles";

export const ConfirmationCardV3 = ({ title, content, options, cancelOptions }: IConfirmationCardV3) => {
  return (
    <s.Container>
      <s.Card>
        <s.Header>
          {title && <s.Title>{title}</s.Title>}
          <s.Content>{content}</s.Content>
        </s.Header>
        {options.length > 0 && (
          <s.Options>
            {options.map((option) => (
              <Button
                design="solid"
                shape="circular"
                size="xs"
                fullWidth
                onClick={option.onClick}
                disabled={option.disabled}
                color={option.type === "primary" ? "SECONDARY/900" : "QUATERNARY/200"}
                fontColor={option.type === "primary" ? "SECONDARY/0" : "SECONDARY/900"}
                style={{ gap: 0 }}
              >
                {option.content}
              </Button>
            ))}
          </s.Options>
        )}
      </s.Card>
      {cancelOptions.length > 0 && (
        <s.Options bottom>
          {cancelOptions.map((option) => (
            <Button
              design="flat"
              size="xs"
              fullWidth
              onClick={option.onClick}
              disabled={option.disabled}
              color="PRIMARY/900"
              style={{ gap: 0 }}
            >
              {option.content}
            </Button>
          ))}
        </s.Options>
      )}
    </s.Container>
  );
};
