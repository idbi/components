import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const ItemImg = styled.img`
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[300]};
  border-radius: 8px;
  width: 33px;
  height: 33px;
  object-fit: cover;
`;

export const ItemData = styled.div`
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  font-size: 14px;
  font-weight: 700;

  & > div {
    color: ${({ theme }) => theme.color.NEUTRAL[500]};
    margin-bottom: -3px;
    font-size: 10px;
    font-weight: 400;

    span {
      font-weight: 700;
      padding-right: 3px;
    }
  }
`;
