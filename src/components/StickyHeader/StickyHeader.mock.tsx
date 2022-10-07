import { IStickyHeaderProps } from "./types";

const base: IStickyHeaderProps = {
  backLabel: "Back",
  onBack: () => {},
  profileImageUrl: "https://picsum.photos/200",
};

const changeRightContent: IStickyHeaderProps = {
  backLabel: "Back",
  onBack: () => {},
  profileImageUrl: "https://picsum.photos/200",
  rightContent: (
    <div>
      opción 1 <strong>opción 2</strong>
    </div>
  ),
};

export const mockStickyHeaderProps = {
  base,
  changeRightContent,
};
