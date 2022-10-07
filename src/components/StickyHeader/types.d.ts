import React from "react";

export interface IStickyHeaderProps {
  onBack: () => void;
  backLabel: string;
  profileImageUrl?: string;
  rightContent?: React.ReactNode
}

export declare const StickyHeader: (props: IStickyHeaderProps) => JSX.Element;
