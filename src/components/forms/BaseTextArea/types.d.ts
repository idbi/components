import React from "react";

export interface IBaseTextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  alert?: boolean;
  fullWidth?: boolean;
  minHeight?: number;
  inputRef?: React.MutableRefObject<HTMLTextAreaElement | null> | ((node: HTMLTextAreaElement | null) => void);
  containerProps?: React.ComponentPropsWithRef<"div">;
};

export declare const BaseTextArea: (props: IBaseTextArea) => JSX.Element;
