import t from"styled-components";const e=t.div`
  background-color: ${o=>`rgba(0, 0, 0, ${o.opacity?o.opacity:"0.5"})`};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${o=>o.zIndex?o.zIndex:"auto"};
  cursor: auto;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;export{e as StyledBackdrop};
