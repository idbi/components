import d from"styled-components";const l=d.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${({theme:o})=>o.color.QUATERNARY[100]};
`,p=d.div`
  padding-left: 15px;
  border-left: 1px solid ${({theme:o})=>o.color.PRIMARY[900]};
`,n={display:"block",padding:"0 0 10px",margin:"0"};export{l as Container,p as Group,n as styledTitle};
