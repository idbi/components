import e,{css as i}from"styled-components";import{styleScroll as d}from"../../../theme/id-scroll.js";const h=e.div`
  background-color: ${t=>t.background||"#fff"};
  border-radius: ${t=>t.borderRadius?t.borderRadius:"15px"};
  max-height: ${t=>t.maxHeight?t.maxHeight:"90vh"};
  height: ${t=>t.height?t.height:"auto"};
  max-width: ${t=>t.maxWidth?t.maxWidth:"90vw"};
  width: ${t=>t.width?t.width:"90vw"};
  padding: ${t=>t.padding?t.padding:"1.5rem"};
  overflow: ${t=>t.overflow||"hidden"};
  cursor: auto;

  ${t=>{if(t.contentLocation&&t.contentLocation==="bottom")return i`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(t.contentLocation&&t.contentLocation==="top")return i`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(t.contentLocation&&t.contentLocation==="left")return i`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100vh;
        max-height: ${()=>t.maxHeight?t.maxHeight:"100vh"};
        max-width: ${()=>t.maxWidth?t.maxWidth:"550px"};
      `;if(t.contentLocation&&t.contentLocation==="right")return i`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 100vh;
        max-height: ${()=>t.maxHeight?t.maxHeight:"100vh"};
        max-width: ${()=>t.maxWidth?t.maxWidth:"550px"};
      `}}

  ${t=>{if(t.contentLocationInDesktop==="center")return i`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>t.borderRadiusInDesktop?t.borderRadiusInDesktop:"15px"};
          height: auto;
          max-width: ${()=>t.maxWidth?t.maxWidth:"90vw"};
          max-height: ${()=>t.maxHeight?t.maxHeight:"90vh"};
          padding: ${()=>t.padding?t.padding:"1.5rem"};
        }
      `;if(t.contentLocationInDesktop==="bottom")return i`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>t.borderRadiusInDesktop?t.borderRadiusInDesktop:"15px"};
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>t.width?t.width:"100vw"};
        }
      `;if(t.contentLocationInDesktop==="top")return i`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>t.borderRadiusInDesktop?t.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>t.width?t.width:"100vw"};
        }
      `;if(t.contentLocationInDesktop==="left")return i`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>t.borderRadiusInDesktop?t.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          height: 100vh;
          max-height: ${()=>t.maxHeight?t.maxHeight:"100vh"};
          max-width: ${()=>t.maxWidth?t.maxWidth:"550px"};
        }
      `;if(t.contentLocationInDesktop==="right")return i`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>t.borderRadiusInDesktop?t.borderRadiusInDesktop:"15px"};
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          height: 100vh;
          max-height: ${()=>t.maxHeight?t.maxHeight:"100vh"};
          max-width: ${()=>t.maxWidth?t.maxWidth:"550px"};
        }
      `}}
  ${d}
`,o=e.div`
  background-color: white;
  box-shadow: 0 2px 7px #e5e5e5;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: ${({closeIcon:t})=>t?"flex":"none"};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 11px;
  cursor: pointer;
  z-index: ${({zIndex:t})=>t||1};
  @media screen and (min-width: 1024px) {
    display: ${({closeIconInDesktop:t})=>t?"flex":"none"};
  }
`;export{o as CloseIcon,h as StyledCardModal};
