/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const PlayGround: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [backColor, setBackColor] = useState("#fff");

  return (
    <Wrapper style={{ background: backColor }}>
      <Header>
        <h1>test your components and clean when finished</h1>
        <label htmlFor="color">Cambia el fondo </label>
        <input
          id="color"
          type="color"
          list="redColors"
          value={backColor}
          onChange={(e) => setBackColor(e?.target?.value || "#fff")}
        />
        <datalist id="redColors">
          <option value="#ffffff" />
          <option value="#000000" />
          <option value="#242954" />
          <option value="#4318FF" />
          <option value="#9f9f9f" />
        </datalist>
      </Header>
      {children}
    </Wrapper>
  );
};

export default PlayGround;
