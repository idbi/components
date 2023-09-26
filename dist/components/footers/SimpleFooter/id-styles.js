import e from"styled-components";const n=e.div`
  display: flex;
  gap: ${({gap:t})=>t||"15px"};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${({marginTop:t})=>t||"15px"};
  padding: ${({padding:t})=>t||"10px 20px"};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-family: 'DM Sans';
  font-style: normal;
  letter-spacing: -0.04em;
  color: ${({theme:t})=>t.color.PRIMARY[900]};
  background: ${({theme:t})=>t.color.PRIMARY[0]};
  box-shadow: ${({theme:t,boxShadow:o})=>o||t.effect.darkShadow[6]};
  position: ${({isFixed:t})=>t?"fixed":"static"};
  bottom: 0;
  left: 0;
  z-index: ${({zIndex:t})=>t||"5"};
`;export{n as Container};
