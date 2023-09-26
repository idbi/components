import d,{css as t}from"styled-components";const n=d.div`
  background-color: white;
  border: 1px solid ${({theme:o})=>o.color.PRIMARY[200]};
  opacity: ${({disabled:o})=>o?.5:1};
  border-radius: 10px;
  width: ${({fullWidth:o})=>o?"100%":"auto"};
  min-height: 48px;
  padding: 5px;
  position: relative;
  display: inline-flex;
  align-items: stretch;
  gap: 4px;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  ${({model:o,theme:r})=>{if(o==="secondary")return t`
        border: none;
        box-shadow: 0px 10px 30px 0px #00000014;
        border-radius: 8px;
        min-height: 45px;
      `;if(o==="tertiary")return t`
        gap: 1px;
        padding: 0px;
        border: 1px solid ${r.color.PRIMARY[200]};
        border-radius: 10px;
      `}}
`,e=d.button`
  background-color: white;
  color: ${({theme:o,model:r})=>r==="secondary"?"#828282":o.color.SECONDARY[500]};
  border: none;
  border-radius: ${({model:o})=>o==="secondary"?"4px":"10px"};
  min-width: 35px;
  padding: 0 4px;
  flex-grow: 1;
  flex-basis: ${({equal:o})=>o?0:"auto"};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.3s;

  ${({active:o})=>{if(o)return t`
        background-color: ${({theme:r})=>r.color.SECONDARY[900]};
        box-shadow: 0px 2px 4px 0px #00000033;
        color: #fff;
      `}}

  ${({model:o,theme:r,active:i})=>{if(o==="tertiary")return t`
        background-color: ${i?r.color.SECONDARY[50]:"white"};
        outline: ${i?`1px solid ${r.color.SECONDARY[500]}`:"1px solid transparent"};
        color: ${i?r.color.SECONDARY[900]:r.color.SECONDARY[600]};
        border-radius: 0;
        min-height: 45px;
        z-index: ${i?1:"auto"};

        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        &:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      `}}
`;d.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;export{e as Btn,n as Container};
