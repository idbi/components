import ArrowBackIcon from "@/icons/ArrowBackIcon";
import styled from "styled-components";
import { Button } from "../Button";
import { Text } from "../Typography";
import DefaultProfile from "/public/default-profile.svg";

export interface StickyHeaderProps {
  onBack: () => void;
  backLabel: string;
  profileImageUrl?: string;
}

const StickyHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
  -webkit-box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
  -moz-box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    gap: 0.5rem;
    height: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  img {
    border-radius: 50%;
  }
`;

export const StickyHeader: React.FC<StickyHeaderProps> = ({
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
