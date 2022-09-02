export interface IStickyHeaderProps {
  onBack: () => void;
  backLabel: string;
  profileImageUrl?: string;
}

export declare const StickyHeader: (props: IStickyHeaderProps) => JSX.Element;
