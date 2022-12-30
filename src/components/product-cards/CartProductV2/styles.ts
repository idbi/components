import styled from "styled-components";

export const Container = styled.div`
  color: 1px solid ${({ theme }) => theme.color.NEUTRAL[700]};
  display: flex;
  gap: 10px;
  font-size: 12px;
`;

export const DishOrderContainer = styled.div<{ clickeable?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;

  & > div {
    position: relative;

    & > button {
      background-color: white;
      border-radius: 4px;
      box-shadow: 0px 1px 4px rgba(33, 33, 33, 0.2);
      border: none;
      width: 29px;
      height: 29px;

      @media (hover: hover) {
        cursor: ${({ clickeable }) => (clickeable ? "pointer" : "auto")};
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`;

export const ImgContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  border-radius: 4px;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DiscountLabel = styled.span`
  background-color: ${({ theme }) => theme.color.SECONDARY[900]};
  color: white;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  padding: 3px 5px;
  position: absolute;
  top: 3px;
  left: 0;
  font-size: 10px;
  font-weight: 700;
`;

export const ProductInformation = styled.div<{ clickeable?: boolean }>`
  flex-grow: 1;

  @media (hover: hover) {
    cursor: ${({ clickeable }) => (clickeable ? "pointer" : "auto")};
  }
`;

export const Details = styled.div`
  & > span {
    font-weight: 500;
  }
  & > div {
    color: ${({ theme }) => theme.color.NEUTRAL[500]};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  & > div:nth-child(2) {
    margin-top: 5px;

    button {
      width: 30px;
      height: 30px;
      + span {
        padding: 0 5px;
      }
    }
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  margin-right: 8px;
  span {
    font-weight: 700;
  }
`;

export const PrevTotal = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.NEUTRAL[400]};
  text-decoration: line-through;
`;
