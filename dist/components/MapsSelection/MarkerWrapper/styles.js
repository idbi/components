import r from"styled-components";const o=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({placement:t})=>t==="center"?"translate(-50%, -50%)":"translate(-50%, -100%)"};
`;export{o as MarkerContainer};
