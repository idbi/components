import t,{css as o}from"styled-components";const p=t.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`,r=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,c=t.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`,l=t.ul`
  color: ${({theme:i})=>i.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
  ${({direction:i})=>i==="column"&&o`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    `}
`,a=t.li`
  background-color: ${({theme:i,alert:e})=>e?i.color.ALERT[100]:"white"};
  color: ${({theme:i,alert:e})=>e?i.color.ALERT[900]:"inherit"};
  min-height: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: ${({iconOrientation:i})=>i==="vertical"?"column-reverse":"row"};
  justify-content: ${({optionsInCenter:i})=>i?"center":"space-between"};
  align-items: center;
  gap: ${({optionsInCenter:i})=>i?"10px":"5px"};
  opacity: ${({disabled:i})=>i?.6:1};
  cursor: ${({disabled:i})=>i?"not-allowed":"pointer"};

  & > svg,
  & > img {
    flex-shrink: 0;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  & > svg {
    font-size: 20px;
  }
`;export{p as Container,c as Header,a as Option,l as OptionsContainer,r as TitleWrapper};
