import styled from "styled-components";

interface IContainer {
  marginTop?: string;
  marginBottom?: string;
}

export const Container = styled.div<IContainer>`
  text-align: center;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #404040;
  button {
    font-family: "Poppins";
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 700;
  }
  margin-top: ${({ marginTop }) => marginTop || "auto"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "auto"};
`;

export const Message = styled.div`
  margin-top: 5px;
`;
