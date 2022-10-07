import ArrowBackIcon from "@/icons/ArrowBackIcon";
import { Text } from "../Typography";
import { StickyHeaderContainer } from "./styles";
import { IStickyHeaderProps } from "./types";

export const StickyHeader: React.FC<IStickyHeaderProps> = ({
  onBack,
  backLabel,
  profileImageUrl,
  rightContent,
}) => {
  return (
    <StickyHeaderContainer>
      <button type="button" onClick={onBack}>
        <ArrowBackIcon />
        <Text color="NEUTRAL/900">{backLabel}</Text>
      </button>
      {rightContent || (
        <img
          width={28}
          height={28}
          src={profileImageUrl || "/default-profile.svg"}
          alt="profile"
          referrerPolicy="no-referrer"
        />
      )}
    </StickyHeaderContainer>
  );
};
