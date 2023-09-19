import i from"styled-components";import{getSize as f,getShape as h,getDesign as k,getFullWidth as m,getDisabled as v,getSpacing as w,getColor as o}from"../../theme/utils.js";const x=i.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,S=i(x)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:t})=>t==="link"?"0":"0.7rem"};
  min-height: ${({design:t})=>t==="link"?"0":"45px"};

  ${({size:t})=>f({size:t})};
  ${({shape:t})=>h({shape:t})};
  ${({design:t,color:e,fontColor:n,theme:r})=>k({design:t,color:e,fontColor:n,theme:r})};
  ${({fullWidth:t})=>m({fullWidth:t})};
  ${({disabled:t})=>v({disabled:t})};
  ${({m:t,mb:e,mt:n,mr:r,ml:a,my:l,mx:u,p:s,pb:c,pt:g,pr:d,pl:p,py:b,px:$})=>w({m:t,mb:e,mt:n,mr:r,ml:a,my:l,mx:u,p:s,pb:c,pt:g,pr:d,pl:p,py:b,px:$})};

  &:hover:not(:disabled) {
    background-color: ${({color:t,design:e,theme:n})=>e==="link"?"transparent":o({color:t,design:e,hover:!0,theme:n})};
  }

  &:active {
    background-color: ${({color:t,design:e,theme:n})=>e==="link"?"transparent":o({color:t,design:e,hover:!0,theme:n})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  b {
    font-weight: bold;
  }
`;export{x as BaseButton,S as Button};
