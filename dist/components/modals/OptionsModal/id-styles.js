import t,{css as i}from"styled-components";const p=t.div`
  color: ${({theme:o})=>o.color.PRIMARY[900]};
  font-size: 20px;
  font-weight: 700;
  padding: 20px 20px 18px;
`,r=t.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 25px;
`,s=t.li`
  color: ${({theme:o})=>o.color.NEUTRAL[800]};
  min-height: ${({minHeight:o})=>o}px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-size: 14px;
  opacity: ${({disabled:o})=>o?.5:1};

  ${({selected:o,theme:e})=>o&&i`
      background-color: ${e.color.QUATERNARY[100]};
    `}

  @media (hover: hover) {
    cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  }
`;export{p as Header,s as Option,r as OptionsList};
