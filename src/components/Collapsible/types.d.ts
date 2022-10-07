export interface ICollapsible {
  open: boolean;
  setOpen: (value: boolean) => void;
  label: string;
  content: React.ReactNode;
}

export declare const Collapsible: (props: ICollapsible) => JSX.Element;
