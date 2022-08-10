import styled from "styled-components";

export const Placeholder = styled.div`
  min-height: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  font: normal 16px "Poppins";
  letter-spacing: -0.04em;
  border: 2px dashed ${({ theme }) => theme.color.NEUTRAL[300]};
  border-radius: 10px;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.color.SECONDARY[900]};
  }

  svg {
    fill: ${({ theme }) => theme.color.SECONDARY[900]};
  }
`;

export const Display = styled.div`
  min-height: 87px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.QUATERNARY[200]};
  border: 1.5px solid ${({ theme }) => theme.color.QUATERNARY[400]};
  border-radius: 10px;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    max-width: 60px;
    height: 60px;
    border-radius: 5px;
    object-fit: cover;
  }
  button {
    color: ${({ theme }) => theme.color.QUATERNARY[900]};
  }
`;

export const Img = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ImgInfo = styled.div`
  max-width: 150px;

  span {
    display: block;
    letter-spacing: -0.04em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span:nth-child(1) {
    font: normal 16px "Poppins";
    color: ${({ theme }) => theme.color.PRIMARY[900]};
  }
  span:nth-child(2) {
    text-transform: uppercase;
    font: normal 12px "Poppins";
    color: ${({ theme }) => theme.color.QUATERNARY[900]};
  }
`;
