import { ReactNode, ChangeEvent, ComponentPropsWithoutRef } from "react";

export type ITextarea = Omit<ComponentPropsWithoutRef<"textarea">, "onChange"> & {
  onChange?: (value: string, event?: ChangeEvent<HTMLTextAreaElement>) => void;
  resize?: boolean;
  startEl?: ReactNode;
  endEl?: ReactNode;
  maxHeight?: string;
};

export declare const Textarea: (props: ITextarea) => JSX.Element;
