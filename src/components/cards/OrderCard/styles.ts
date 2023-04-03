import { OrderStatusType } from "@/types/OrderStatusType";
import styled, { css } from "styled-components";

interface IStatus {
  status: OrderStatusType;
}

interface IContainer extends IStatus {
  noHover: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  cursor: default;
  flex-direction: column;
  box-shadow: rgba(128, 136, 156, 0.31) 0px 4px 6px 0px;
  width: 100%;
  max-width: 190px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background: "red";
  transition: 0.3s;
  ${({ status }) => {
    if (status === "canceled") {
      return css`
        background: #e8e8e8;
      `;
    }
    if (status === "accepted") {
      return css`
        border-top: 6px solid #151e5a;
      `;
    }
    return css`
      border-top: 6px solid #bdbdbd;
    `;
  }}
  ${({ noHover }) => {
    if (!noHover)
      return css`
        :hover {
          transform: scale(1.02);
        }
      `;
  }}
`;

export const Body = styled.div`
  padding: 20px 15px;
`;

export const Footer = styled.div`
  background-color: ${(props) => props.theme.color.QUATERNARY[200]};
  color: ${(props) => props.theme.color.PRIMARY[900]};
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;

export const Time = styled.span`
  display: block;
  font-size: 0.9em;
  font-weight: 300;
  color: #afafaf;
  text-align: left;
  margin: 5px 0;
`;

export const Badge = styled.span<IStatus>`
  margin: 0;
  display: block;
  font-size: 13px;
  margin-bottom: 5px;

  ${({ status }) => {
    if (status === "accepted") {
      return css`
        color: #151e5a;
      `;
    }
    return css`
      color: #bdbdbd;
    `;
  }};
`;

export const NumClients = styled.span`
  margin: 0;
  color: ${(props) => props.theme.color.PRIMARY[900]};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 600;
`;

export const Title = styled.p`
  margin: 0 0 5px;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Spot = styled.div`
  display: block;
  margin: 0 0 5px;
  font-size: 0.9em;
  font-weight: 300;
  text-align: left;
`;

export const Seller = styled.span`
  display: block;
  margin: 5px 0;
  font-size: 0.75em;
  font-weight: 300;
  color: #6986e5;
  text-transform: uppercase;
`;
