import styled from "styled-components";
import { Placement } from "./types";

export const MarkerContainer = styled.div<{ placement?: Placement }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ placement }) => (placement === "center" ? "translate(-50%, -50%)" : "translate(-50%, -100%)")};
`;
