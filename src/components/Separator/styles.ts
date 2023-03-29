import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${({ theme }) => theme.color.QUATERNARY[100]};
`;

export const Group = styled.div`
  padding-left: 15px;
  border-left: 1px solid ${({ theme }) => theme.color.PRIMARY[900]};
`;

export const styledTitle: any = {
  display: "block",
  padding: "0 0 10px",
  margin: "0",
};
