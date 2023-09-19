import n,{css as i}from"styled-components";const d=n.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  ${r=>{if(r.disabled)return i`
        opacity: 0.6;
        cursor: not-allowed;
      `}}
`,p=n.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  height: ${({width:r})=>r?r/2:50/2}px;
  width: ${({width:r})=>r||50}px;
  padding: ${({padding:r})=>r||3}px;
  border-radius: ${({width:r})=>r?r/4:50/4}px;
  ${({toggled:r,styleOn:o,styleOff:a})=>r?i`
        background-color: ${(o==null?void 0:o.background)||"#4318FF"};
        border: ${(o==null?void 0:o.border)||"none"};
      `:i`
      background-color: ${(a==null?void 0:a.background)||"#DFDFDF"};
      border: ${(a==null?void 0:a.border)||"none"};
    `}
`,t=n.div`
  z-index: 2;
  border-radius: 50%;
  background-color: ${({theme:r})=>r.color.SECONDARY[900]};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  will-change: transform;
  height: ${({width:r,padding:o})=>(r?r/2:50/2)-(o?o*2:3*2)}px;
  width: ${({width:r,padding:o})=>(r?r/2:50/2)-(o?o*2:3*2)}px;

  ${({toggled:r,styleOn:o,styleOff:a,width:e})=>r?i`
        background-color: ${(o==null?void 0:o.ballColor)||"#fff"};
        transform: ${`translateX(${e?e/2:50/2}px)`};
      `:i`
      background-color: ${(a==null?void 0:a.ballColor)||"#fff"};
    `}
`,g=n.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  opacity: ${r=>r.visible?1:0};
  transform: ${r=>r.visible?"scale(10, 10)":"scale(0, 0)"};
  background-image: ${({styleOn:r})=>`radial-gradient(circle, ${(r==null?void 0:r.background)||"#4318FF"} 10%, transparent 10.01%)`};
`;n.p`
  font-size: 1.1em;
  font-weight: 500;
  color: #4a4a4a;
  display: flex;
  margin: 15px 0;
  padding: 0 20px;
`;export{g as RippleBg,p as Toggle,t as ToggleBall,d as ToggleSwitchWrapper};
