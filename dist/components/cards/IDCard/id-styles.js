import o from"../../../theme/id-media-query.js";import i from"styled-components";const r=i.div`
  font-family: 'Poppins';
  font-style: normal;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,p=i.div`
  display: flex;
  align-items: center;
  padding: ${({padding:e})=>e||"0 10px"};
`,l=i.span`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${({theme:e})=>e.color.NEUTRAL[500]};
`,m=i.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${({theme:e})=>e.color.PRIMARY[900]};
`,a=i.img`
  border: 1px solid #bfbfbf;
  margin: 8px 10px 0 0;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  @media screen and ${o.md} {
    margin: 4px 10px 0 0;
    width: 34px;
    height: 34px;
  }
`;export{r as Container,p as IconContainer,l as Id,a as ItemPhoto,m as Name};
