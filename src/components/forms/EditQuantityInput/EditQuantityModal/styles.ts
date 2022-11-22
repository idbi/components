import styled from "styled-components";

export const ModalTitle = styled.h2`
  color: ${(props) => props.theme.color.PRIMARY[900]};
  margin-bottom: 20px;
  font-size: 20px;
`;

export const ModalContent = styled.div`
  display: flex;

  input {
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.NEUTRAL[300]};
    display: block;
    flex-grow: 1;
    width: 0;
    padding-left: 10px;
    margin-right: 10px;
  }
`;
