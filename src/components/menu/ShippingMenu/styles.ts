import styled from "styled-components";

export const ShippingMenuContainer = styled.div`
  width: 80%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 1px 13px 0;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[300]};
  box-sizing: border-box;
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8125rem;
  line-height: 19px;
  margin-bottom: 15px !important;
  p {
    color: #46494d;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 2px;
  margin-right: 5px;
`;

export const Icon = styled.div`
  padding-top: 5px;
  svg {
    transform: scale(1.2);
    border-radius: 50px;
    cursor: pointer;
  }
  &:nth-child(2) {
    margin-left: 10px;
  }
`;
