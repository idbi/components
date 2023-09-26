import o from"styled-components";const r=o.span`
  color: ${({color:e})=>e||"currentColor"};
  display: inline-flex;
  align-items: center;
  gap: ${({spacing:e})=>e?`${e}px`:"0.5em"};
  font-size: ${({size:e})=>e?`${e}px`:"1em"};

  svg {
    font-size: ${({bulletSize:e})=>e?`${e}px`:"0.4em"};
  }
`;export{r as Container};
