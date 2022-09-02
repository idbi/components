import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import styled, { keyframes } from "styled-components";

export const CollapsibleSC = styled(CollapsiblePrimitive.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.effect.darkShadow[4]};
  border-radius: 0.5rem;
`;

export const CollapsibleTriggerSC = styled(CollapsiblePrimitive.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const open = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`;

export const close = keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`;

export const CollapsibleContentSC = styled(CollapsiblePrimitive.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${open} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${close} 300ms ease-out;
  }
`;
