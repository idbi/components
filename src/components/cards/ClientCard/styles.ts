import styled from "styled-components";

export const Card = styled.div`
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[200]};
  border-radius: 10px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const ImgWrapper = styled.div`
  margin-right: 10px;
  flex-shrink: 0;
`;

export const DataFields = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[700]};
  margin-bottom: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 1px 7px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    line-height: 1em;
    :not(:last-child) {
      padding-right: 5px;
      border-right: 1px solid ${({ theme }) => theme.color.NEUTRAL[700]};
    }
  }
`;

export const Name = styled.span`
  display: block;
  font-weight: 500;
  line-height: 1em;
`;
