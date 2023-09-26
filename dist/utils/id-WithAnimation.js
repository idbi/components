import t,{keyframes as i,css as o}from"styled-components";const n=i`
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }

  80% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,r=t.div`
  opacity: 0;
  ${({shouldAppear:a})=>a&&o`
      animation: ${n} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`;export{r as WithAnimation};
