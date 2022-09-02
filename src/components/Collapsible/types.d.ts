export interface ICollapsibleProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  label: string;
  content: React.ReactNode;
}

export declare const Collapsible: (props: ICollapsibleProps) => JSX.Element;
