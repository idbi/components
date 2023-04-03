/* eslint-disable prettier/prettier */
import MQ from "@/theme/media-query";
import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const IconContainer = styled.div<{padding?: string}>`
  display: flex;
  align-items: center;
  padding: ${({padding}) => padding || "0 10px"};
`

export const Id = styled.span`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${({ theme }) => theme.color.NEUTRAL[500]};
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${({ theme }) => theme.color.PRIMARY[900]};
`;

export const ItemPhoto = styled.img`
  border: 1px solid #bfbfbf;
  margin: 8px 10px 0 0;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  @media screen and ${MQ.md} {
    margin: 4px 10px 0 0;
    width: 34px;
    height: 34px;
  }
`;
