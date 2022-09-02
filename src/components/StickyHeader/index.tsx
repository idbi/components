import ArrowBackIcon from "@/icons/ArrowBackIcon";
import { Text } from "../Typography";
import DefaultProfile from "/public/default-profile.svg";
import { StickyHeaderContainer } from "./styles";
import { IStickyHeaderProps } from "./types";

export const StickyHeader: React.FC<IStickyHeaderProps> = ({
  onBack,
  backLabel,
  profileImageUrl,
}) => {
  return (
    <StickyHeaderContainer>
      <button type="button" onClick={onBack}>
        <ArrowBackIcon />
        <Text color="NEUTRAL/900">{backLabel}</Text>
      </button>
      <img
        width={28}
        height={28}
        src={profileImageUrl || DefaultProfile}
        alt="profile"
        referrerPolicy="no-referrer"
      />
    </StickyHeaderContainer>
  );
};
