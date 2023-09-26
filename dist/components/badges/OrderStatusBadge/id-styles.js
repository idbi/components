import S,{css as T}from"styled-components";const l=S.span`
  padding: ${({removeBackground:r})=>r?"0":"4px 10px "};
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({theme:r,removeBackground:o})=>o?"transparent":r.color.STATUS.DEFAULT[0]};
  color: ${({theme:r})=>r.color.STATUS.DEFAULT[1]};

  ${({theme:r,statusName:o,removeBackground:n})=>{if(o==="draft")return T`
        background: ${n?"transparent":r.color.STATUS.DRAFT[0]};
        color: ${r.color.STATUS.DRAFT[1]};
      `;if(o==="pending")return T`
        background: ${n?"transparent":r.color.STATUS.PENDING[0]};
        color: ${r.color.STATUS.PENDING[1]};
      `;if(o==="rejected")return T`
        background: ${n?"transparent":r.color.STATUS.REJECTED[0]};
        color: ${r.color.STATUS.REJECTED[1]};
      `;if(o==="accepted")return T`
        background: ${n?"transparent":r.color.STATUS.ACCEPTED[0]};
        color: ${r.color.STATUS.ACCEPTED[1]};
      `;if(o==="canceled")return T`
        background: ${n?"transparent":r.color.STATUS.CANCELED[0]};
        color: ${r.color.STATUS.CANCELED[1]};
      `;if(o==="preparing")return T`
        background: ${n?"transparent":r.color.STATUS.PREPARING[0]};
        color: ${r.color.STATUS.PREPARING[1]};
      `;if(o==="readyforpickup")return T`
        background: ${n?"transparent":r.color.STATUS.READYFORPICKUP[0]};
        color: ${r.color.STATUS.READYFORPICKUP[1]};
      `;if(o==="delivered")return T`
        background: ${n?"transparent":r.color.STATUS.DELIVERED[0]};
        color: ${r.color.STATUS.DELIVERED[1]};
      `;if(o==="finished")return T`
        background: ${n?"transparent":r.color.STATUS.FINISHED[0]};
        color: ${r.color.STATUS.FINISHED[1]};
      `}};
`;export{l as Container};
