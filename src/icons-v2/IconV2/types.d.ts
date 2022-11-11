interface IProps {
  color?: string;
  size?: number;
  children?: ReactNode;
}

export type IIconV2 = IProps & React.SVGAttributes<SVGElement>;

declare const IconV2: (props: IIconV2) => JSX.Element;
