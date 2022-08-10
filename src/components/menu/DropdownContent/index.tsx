import React, { useState } from "react";
import { Container, Summary, Content } from "./styles";

type DropdownContentProps = {
  summary?: string;
  icon?: any;
};

export const DropdownContent: React.FC<DropdownContentProps> = ({ summary, icon, children }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Summary onClick={() => setShow(!show)}>
        <span>{summary}</span>
        <span style={!show ? { transform: "rotate(-90deg)" } : { transform: "translate(-3px, 4px)" }}>{icon}</span>
      </Summary>
      {show && <Content>{children}</Content>}
    </Container>
  );
};
