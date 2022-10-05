import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderAnim = styled.div`
  display: block;
  margin: ${(props) => props.margin || "25% auto"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border: ${(props) => props.borderWidth || "0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${loadingAnimation} 1s infinite linear;
`;

const LoaderCircle = (props) => {
  return <LoaderAnim width={props.width} height={props.height} borderWidth={props.borderWidth} margin={props.margin} />;
};

export default LoaderCircle;
