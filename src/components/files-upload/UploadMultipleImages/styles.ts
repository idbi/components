import styled from "styled-components";

const BaseContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 7px;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ImgWrapper = styled(BaseContainer)`
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Placeholder = styled(BaseContainer)`
  border: 2px dashed ${({ theme }) => theme.color.SECONDARY[400]};
  color: ${({ theme }) => theme.color.SECONDARY[900]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;
