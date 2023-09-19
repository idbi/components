import T,{css as c}from"styled-components";const n=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: #fff;
  color: #404040;
  border-radius: ${({radius:o})=>`${o}px`||"0"};

  ${({theme:o,statusName:r})=>{if(r==="draft")return c`
        background: ${o.color.STATUS.DRAFT[0]};
        color: ${o.color.STATUS.DRAFT[1]};
      `;if(r==="pending")return c`
        background: ${o.color.STATUS.PENDING[0]};
        color: ${o.color.STATUS.PENDING[1]};
      `;if(r==="rejected")return c`
        background: ${o.color.STATUS.REJECTED[0]};
        color: ${o.color.STATUS.REJECTED[1]};
      `;if(r==="accepted")return c`
        background: ${o.color.STATUS.ACCEPTED[0]};
        color: ${o.color.STATUS.ACCEPTED[1]};
      `;if(r==="canceled")return c`
        background: ${o.color.STATUS.CANCELED[0]};
        color: ${o.color.STATUS.CANCELED[1]};
      `;if(r==="preparing")return c`
        background: ${o.color.STATUS.PREPARING[0]};
        color: ${o.color.STATUS.PREPARING[1]};
      `;if(r==="readyforpickup")return c`
        background: ${o.color.STATUS.READYFORPICKUP[0]};
        color: ${o.color.STATUS.READYFORPICKUP[1]};
      `;if(r==="delivered")return c`
        background: ${o.color.STATUS.DELIVERED[0]};
        color: ${o.color.STATUS.DELIVERED[1]};
      `}};
`,S=T.p`
  font-weight: 700;
`;export{n as Container,S as Title};
