import{getDimension as t}from"../../utils/id-dimensions.js";import n,{keyframes as o,css as a}from"styled-components";const i={base:"#ebebeb",highlight:"#f5f5f5"},r=o`
 100% {
    transform: translateX(100%);
  }
`,l=n.div`
  background-color: ${i.base};
  border-radius: ${({borderRadius:e="0.25em"})=>t(e)};
  height: ${({height:e="1em"})=>t(e)};
  position: relative;
  overflow: hidden;
  z-index: 1;
  line-height: 1;

  ${({width:e})=>e&&a`
      width: ${t(e)};
    `}

  ::after {
    content: " ";
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: ${`linear-gradient(90deg, ${i.base}, ${i.highlight}, ${i.base})`};
    transform: translateX(-100%);

    animation-name: ${r};
    animation-direction: normal;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;export{l as Skeleton};
