import{theme as r}from"../../theme/id-index.js";import s,{css as e}from"styled-components";const d=s.div`
  width: ${t=>t.size}px;
  height: ${t=>t.size}px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${t=>t.size}px;
    height: ${t=>t.size}px;
    border-radius: ${t=>t.borderRadius||"50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
  }
  &:hover ::before {
    width: ${t=>t.size*2}px;
    height: ${t=>t.size*2}px;
    background: ${()=>r.color.NEUTRAL[50]};
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${t=>t.size*2}px;
    height: ${t=>t.size*2}px;
    border-radius: ${t=>t.borderRadius||"50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
    opacity: 0.3;
  }
  &:active ::after {
    width: ${t=>t.size*2}px;
    height: ${t=>t.size*2}px;
    background: #fff;
  }

  ${t=>t.variant=="V1"&&e`
      ${i=>i.active&&e`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${o=>o.color||r.color.PRIMARY[900]};
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            border-radius: ${o=>o.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            background: ${o=>o.color||r.color.PRIMARY[900]};
          }
        `}
    `}
  ${t=>t.variant=="V2"&&e`
      ${i=>i.active&&e`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${o=>o.size}px;
            height: ${o=>o.size}px;
            border-radius: ${o=>o.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            background: ${()=>r.color.NEUTRAL[50]};
          }
        `}
    `}
`,h=s.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${t=>t.size}px;
  height: ${t=>t.size}px;
  fill: ${t=>t.color||r.color.PRIMARY[900]};
  ${t=>t.variant==="V1"&&e`
      ${i=>i.active&&e`
          fill: #fff;
        `}
    `}
  ${t=>t.variant==="V2"&&e`
      fill: ${()=>r.color.NEUTRAL[400]};
      ${i=>i.active&&e`
          fill: ${o=>o.color||r.color.PRIMARY[900]};
        `}
    `}
`;export{h as SvgSC,d as WrappSC};
