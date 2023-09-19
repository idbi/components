import{styleScroll as t}from"../../theme/scroll.js";import i from"styled-components";const p=i.div`
  position: ${({isSticky:o})=>o?"sticky":"static"};
  top: 0;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  z-index: ${({zIndex:o})=>o||100};
  * {
    box-sizing: border-box;
  }
`,a=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,d=i.div`
  position: relative;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  overflow-x: auto;
  ${t}
  @media screen and (min-width: 1024px) {
    padding: 15px 20px;
  }
`,r=i.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,s=i.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  color: ${({theme:o})=>o.color.PRIMARY[900]};
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
`,x=i.div`
  * {
    text-align: right;
    white-space: nowrap;
  }
  span {
    display: block;
    margin-top: -5px;
  }
`,l=i.nav`
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
  ${t}
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
    color: ${({theme:o})=>o.color.PRIMARY[900]};
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    div {
      padding: 10px 0;
    }
    border-bottom: 1px solid ${({theme:o})=>o.color.PRIMARY[50]};

    ul {
      padding-bottom: 15px;
      li {
        padding: 5px 0;
        padding-left: 10px;
        color: ${({theme:o})=>o.color.NEUTRAL[400]};
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
`,c=i.div`
  max-height: 70vh;
  width: 100%;
  position: absolute;
  top: 98%;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  ${t}
  @media screen and (min-width: 1024px) {
    right: 20px;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(153, 181, 255, 0.2);
  }
`;export{l as Body,p as Container,a as FlexContainer,d as Header,s as HeaderLinks,r as HeaderOptions,c as NotificactionsBody,x as UserInfo};
