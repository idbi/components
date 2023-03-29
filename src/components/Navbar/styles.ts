import { theme } from "@/theme";
import { styleScroll } from "@/theme/scroll";
import styled from "styled-components";

interface IContainer {
  zIndex?: number;
  isSticky?: boolean;
}

export const Container = styled.div<IContainer>`
  position: ${({ isSticky }) => (isSticky ? "sticky" : "static")};
  top: 0;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  z-index: ${({ zIndex }) => zIndex || 100};
  * {
    box-sizing: border-box;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  overflow-x: auto;
  ${styleScroll}
  @media screen and (min-width: 1024px) {
    padding: 15px 20px;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const HeaderLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  color: ${theme.color.PRIMARY[900]};
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;
  cursor: pointer;
  li {
    padding: 0 10px;
  }
  li:hover {
    font-weight: 600;
  }
`;

export const UserInfo = styled.div`
  * {
    text-align: right;
    white-space: nowrap;
  }
  span {
    display: block;
    margin-top: -5px;
  }
`;

export const Body = styled.nav`
  max-height: 70vh;
  width: 100%;
  position: absolute;
  padding: 0 15px 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  ${styleScroll}
  button {
    border-radius: 5px;
    text-align: left;
    justify-content: flex-start;
    padding: 10;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    color: ${theme.color.PRIMARY[900]};
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    div {
      padding: 10px 0;
    }
    border-bottom: 1px solid ${theme.color.PRIMARY[50]};

    ul {
      padding-bottom: 15px;
      li {
        padding: 5px 0;
        padding-left: 10px;
        color: ${theme.color.NEUTRAL[400]};
        border-bottom: none;
      }
      li:hover {
        font-weight: 600;
        background: #fcfcfc;
      }
    }
  }

  li div:hover {
    font-weight: 600;
    background: #fcfcfc;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 20px 10px;
  }
`;

export const NotificactionsBody = styled.div`
  max-height: 70vh;
  width: 100%;
  position: absolute;
  top: 98%;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  ${styleScroll}
  @media screen and (min-width: 1024px) {
    right: 20px;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(153, 181, 255, 0.2);
  }
`;
