import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #383838;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15px;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`;

export const Date = styled.span`
  color: #151E5A;
  font-weight: 500;
`;
