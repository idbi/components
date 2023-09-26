import o,{css as n}from"styled-components";import{getDisabled as t}from"../../../theme/id-utils.js";const l=o.div`
  padding: ${({withDescription:e})=>e?"3px 14px 5px":"0 14px"};
  display: ${({withDescription:e})=>e?"block":"flex"};
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[300]};
  background: #fff;
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: ${({withDescription:e})=>e?"0px 0":"12px 0"};
    background: transparent;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    letter-spacing: -0.04em;
    color: ${({theme:e})=>e.color.NEUTRAL[700]};
    ::placeholder {
      color: ${({theme:e})=>e.color.NEUTRAL[500]};
    }
  }
  ${({readingMode:e})=>e&&n`
    border: none;
    padding: 0;
    background: transparent;
    input {
      padding: 0;
    }
  `}
  ${({disabled:e})=>t({disabled:e})}; 
`,p=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({readingMode:e})=>e?"flex-start":"space-between"};
  gap: 3px;
`,a=o.span`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.NEUTRAL[500]};
`,c=o.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.NEUTRAL[500]};
`,s=o.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({theme:e})=>e.color.PRIMARY[900]};
`;export{l as Container,a as Description,p as SubContainer,c as Suffix,s as Value};
