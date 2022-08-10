import styled from "styled-components";
import { BaseButton } from "@/components/button";

export const RankingRow = styled.div`
  display: grid;
  grid-template-columns: 2fr auto 1fr;
  gap: 22px;
  margin-bottom: 9px;
`;

export const RankingLabel = styled.p`
  color: ${(props) => props.theme.color.NEUTRAL[500]};
  font-size: 14px;
  > span {
    color: #5783d4;
    font-weight: 500;
    margin-right: 10px;
  }
`;

export const RankingValue = styled.p`
  color: #1b2559;
  font-size: 12px;
  font-family: Poppins;
`;
export const SeeMoreButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 14px;
  padding-right: 1rem;
  border-top: 1px solid #e9eaee;
`;
export const SeeMoreButton = styled(BaseButton)`
  color: #4318ff;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    color: #4318ff;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.color.NEUTRAL[700]};
`;
