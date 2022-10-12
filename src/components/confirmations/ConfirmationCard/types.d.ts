export interface IConfirmationCard {
  icon?: React.ReactNode;
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

export declare const ConfirmationCard: (props: IConfirmationCard) => JSX.Element;