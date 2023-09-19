import*as e from"@radix-ui/react-collapsible";import o,{keyframes as t}from"styled-components";const s=o(e.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${({theme:a})=>a.effect.darkShadow[4]};
  border-radius: 0.5rem;
`,l=o(e.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,r=t`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`,i=t`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`,d=o(e.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${r} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${i} 300ms ease-out;
  }
`;export{d as CollapsibleContentSC,s as CollapsibleSC,l as CollapsibleTriggerSC,i as close,r as open};
