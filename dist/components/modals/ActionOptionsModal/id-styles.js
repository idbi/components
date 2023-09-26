import t from"styled-components";const i=t.div`
  color: ${({theme:o})=>o.color.PRIMARY[900]};
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 18px;
`,n=t.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,p=t.li`
  color: ${({theme:o})=>o.color.NEUTRAL[600]};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  opacity: ${({disabled:o})=>o?.5:1};

  @media (hover: hover) {
    cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  }
`;export{i as Header,p as Option,n as OptionsContainer};
