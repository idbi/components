import React from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 2px 7px #e5e5e5;
  color: ${(props) => props.theme.color.PRIMARY[100]};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

interface PropsType {
  onClick?: () => void;
}

const CloseIcon = ({ onClick = () => {} }: PropsType) => {
  return (
    <Wrapper onClick={onClick}>
      <GrClose />
    </Wrapper>
  );
};

export default CloseIcon;
