import l from"styled-components";const t=l.label`
  display: flex;
  gap: 9px;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: ${({disabled:e})=>e?"gray":"#242954"};
  cursor: pointer;
  input {
    display: none;
  }
  span > svg > path {
    fill: ${({disabled:e,theme:o})=>e?"gray":o.color.SECONDARY[900]};
  }
`;export{t as Label};
