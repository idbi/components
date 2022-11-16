import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  color: 1px solid ${({ theme }) => theme.color.NEUTRAL[700]};
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
`;

export const Header = styled.div<{ canClick?: boolean }>`
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
  cursor: ${({ canClick }) => (canClick ? "pointer" : "auto")};
`;

export const Img = styled.img`
  border-radius: 8px;
  width: 55px;
  height: 55px;
  object-fit: cover;
`;

export const ProductData = styled.div`
  flex-grow: 1;
`;

export const Name = styled.span<{ detailsActive?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;

  svg {
    flex-shrink: 0;
    margin: 3px 3px 0 0;
    transition: 0.3s;
    transform: ${({ detailsActive }) => (detailsActive ? "rotate(0)" : `rotate(-90deg)`)};
    cursor: pointer;
  }
`;

export const DiscountLabel = styled.span`
  color: ${({ theme }) => theme.color.SUCCESS[900]};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
`;

export const Price = styled.span`
  display: block;
  color: 1px solid ${({ theme }) => theme.color.PRIMARY[900]};
  span {
    font-weight: 700;
  }
`;

export const Patch = styled.span`
  background-color: ${({ theme }) => theme.color.SUCCESS[900]};
  border-radius: 50px;
  color: white;
  display: inline-block;
  padding: 5px 8px;
  font-weight: 500;
  font-size: 10px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  height: 34px;
  border-radius: 8px;
  width: 100%;
  font-size: 12px;
  padding: 5px 10px;

  :focus {
    border: 1px solid ${({ theme }) => theme.color.NEUTRAL[500]};
    outline: none;
  }
`;

export const DetailsWrapper = styled.div`
  margin-top: 8px;
`;

export const Footer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
