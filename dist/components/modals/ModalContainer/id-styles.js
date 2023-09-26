import i,{keyframes as o,css as n}from"styled-components";const a=o`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,e=o`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,r=o`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,s=o`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,f=i.div`
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  width: ${({fullWidth:t})=>t?"100%":"unset"};
  overflow: auto;
  animation: fadeIn 0.3s ease-in-out;
  z-index: ${t=>t.zIndex};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${t=>t.boxShadow||"0px 0px 24px 4px rgba(0, 12, 51, 0.05)"};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${t=>{if(t.contentLocation==="bottom")return n`
        transform: translate(0, 0);
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
        animation: ${a} 0.3s ease-out;
      `;if(t.contentLocation==="top")return n`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${e} 0.3s ease-out;
      `;if(t.contentLocation==="left")return n`
        transform: translate(0, 0);
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        animation: ${r} 0.3s ease-out;
      `;if(t.contentLocation==="right")return n`
        transform: translate(0, 0);
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
        animation: ${s} 0.3s ease-out;
      `}}

  ${t=>{if(t.contentLocationInDesktop==="center")return n`
        @media screen and (min-width: 1024px) {
          transform: translate(-50%, -50%);
          bottom: unset;
          right: unset;
          top: 50%;
          left: 50%;
          animation: fadeIn 0.3s ease-out;
        }
      `;if(t.contentLocationInDesktop==="bottom")return n`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${a} 0.3s ease-out;
        }
      `;if(t.contentLocationInDesktop==="top")return n`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${e} 0.3s ease-out;
        }
      `;if(t.contentLocationInDesktop==="left")return n`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${r} 0.3s ease-out;
        }
      `;if(t.contentLocationInDesktop==="right")return n`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          left: unset;
          right: 0;
          bottom: 0;
          animation: ${s} 0.3s ease-out;
        }
      `}}
  @media screen and (min-width: 1024px) {
    box-shadow: ${t=>t.boxShadowInDesktop||"0px 0px 24px 4px rgba(0, 12, 51, 0.05)"};
  }
`;export{f as Content};
