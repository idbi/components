import styled from "styled-components";

export const SimpleMetricCard = styled.div`
  border-radius: 15px;
  padding: 30px 23px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  min-height: 108px;
`;

export const MainMetricCard = styled(SimpleMetricCard)`
  background: linear-gradient(
    102.45deg,
    rgba(211, 217, 255, 0.76) 0.8%,
    #9ba8ff 101.76%
  );
`;

type BarProps = {
  readonly percentage: number;
};
export const VerticalBar = styled.span<BarProps>`
  display: inline-block;
  width: 29.15px;
  background-color: #6788fe;
  height: ${(props) => 94 * (props.percentage / 100)}px;
  border-radius: 4px;
`;

export const HorizontalBar = styled.span<BarProps>`
  position: relative;
  display: inline-block;
  width: 116px;
  background-color: #e9edf7;
  height: 11.28px;
  border-radius: 60px;
  &::after {
    position: absolute;
    content: "";
    width: ${(props) => props.percentage}%;
    height: 100%;
    background-color: #3a3e65;
    border-radius: 60px;
    left: 0;
    top: 0;
  }
`;

type CardHeadingProps = {
  readonly isMain?: boolean;
};

export const CardHeading = styled.h3<CardHeadingProps>`
  font-size: 14px;
  font-weight: normal;
  color: ${(props) =>
    props.isMain ? "#666987" : props.theme.color.NEUTRAL[500]};
`;

export const BarHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    margin-bottom: 39px;
  }
`;
