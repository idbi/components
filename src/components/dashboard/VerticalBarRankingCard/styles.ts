import styled from "styled-components";
import { BaseButton } from "@/components/button";

export const ArrowButton = styled(BaseButton)`
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  width: 30px;
  height: 30px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.PRIMARY[900]};
  }
  border-radius: 50%;
  svg {
    color: ${(props) => props.theme.color.PRIMARY[900]};
    color: black;
  }
`;

export const Content = styled.div`
  position: relative;
  ${ArrowButton} {
    position: absolute;
    top: calc(50% - 15px);
    z-index: 2;
  }
  ${ArrowButton}.verticalbarrankingcard-left {
    left: 10px;
  }
  ${ArrowButton}.verticalbarrankingcard-right {
    right: 10px;
  }
`;

export const Scroll = styled.div`
  max-width: 100%;
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem;
  align-items: end;
  overflow-x: auto;

  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const VerticalBarItemData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

export const VerticalBarLabel = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.color.NEUTRAL[700]};
`;

export const VerticalBarItemValue = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.color.PRIMARY[900]};
  white-space: nowrap;
`;

export const EmptyMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.color.NEUTRAL[700]};
`;
