export interface IConfirmationCardV2 {
  note?: string;
  btnLeft?: {
    onClick: () => void;
    text: string;
  };
  btnRight?: {
    onClick: () => void;
    text: string;
  };
  children: React.ReactNode;
}

export declare const ConfirmationCardV2: (props: IConfirmationCardV2) => JSX.Element;