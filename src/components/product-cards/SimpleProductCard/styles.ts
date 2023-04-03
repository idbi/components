import styled from "styled-components";

interface IContainer {
  maxWidth: string;
  disabled: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  height: 147px;
  max-width: ${({ maxWidth }) => maxWidth || "301px"};
  position: relative;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 4px 1px #8b8b8b52;
  background-color: #fff;
  user-select: none;
  transition: 0.3s;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  :hover {
    transform: ${({ disabled }) => (disabled ? "scale(1)" : "scale(1.005)")};
  }
`;

export const GrayFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  margin-top: 10px;
  margin-left: 12px;
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.color.PRIMARY[100]};
  border-radius: 7px;
  object-position: center;
  object-fit: contain;
  align-self: center;
  overflow-y: hidden;
`;

export const GrayOverlay = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 10px;
  left: 12px;
  z-index: 3;
  border-radius: 6.8px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 60%
  );
`;

export const Code = styled.p`
  margin: 0;
  max-width: 11ch;
  position: absolute;
  bottom: 8px;
  left: 11px;
  font-size: 0.85em;
  font-weight: 300;
  color: #848484;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Discount = styled.div`
  padding: 4px 8px 4px 4px;
  z-index: 4;
  gap: 7px;
  position: absolute;
  top: 16px;
  left: 0;
  background: ${({ theme }) => theme.color.SECONDARY[900]};
  color: #fff;
  font-family: Poppins;
  font-weight: 700;
  border-radius: 0 12px 12px 0;
  font-size: 10px;
  height: 23px;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  padding-top: 6px;
  padding-left: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.04em;
  margin-top: 10px;
  max-width: 18ch;
  padding-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.color.NEUTRAL[700]};
`;

export const Description = styled.p`
  margin: 0;
  max-width: calc(100% - 10px);
  padding-top: 0;
  font-size: 0.85em;
  font-weight: 300;
  color: #848484;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceSymbol = styled.span`
  margin: 0;
  letter-spacing: 0.5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.PRIMARY[900]};
`;

export const PriceNumber = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  text-align: left;
  gap: 4px;
  letter-spacing: -0.04em;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.PRIMARY[900]};
`;

export const DisabledMessage = styled.p`
  margin: 0;
  margin-top: 3px;
  font-size: 14px;
  max-width: 100%;
  line-height: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.color.ALERT[900]};
`;
