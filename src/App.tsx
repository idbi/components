import styled, { css } from "styled-components";
import { ConfirmationCardV3 } from "./components/confirmations/ConfirmationCardV3";
import PlayGround from "./components/Playground";

export const Btn = styled.button<{ model: "primary" | "secondary" | "alert" }>`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.SECONDARY[900]};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.SECONDARY[900]};
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  :not(:disabled) {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.5;
  }

  ${({ model, theme }) => {
    if (model === "secondary")
      return css`
        border: 1px solid ${theme.color.SECONDARY[200]};
      `;
    if (model === "alert")
      return css`
        border: 1px solid ${theme.color.ALERT[900]};
        color: ${theme.color.ALERT[900]};
      `;
  }}
`;

function App() {
  return (
    <PlayGround>
      <ConfirmationCardV3
        options={[
          {
            content: (
              <span>
                Crear <b>borrador</b>
              </span>
            ),
            onClick: function Ul() {},
          },
          {
            content: (
              <span>
                Crear y <b>finalizar</b>
              </span>
            ),
            onClick: function Ul() {},
          },
          {
            content: "Crear",
            onClick: function Ul() {},
            type: "primary",
          },
        ]}
        cancelOptions={[
          {
            content: "Cancelar",
            onClick: function Ul() {},
          },
        ]}
      />
    </PlayGround>
  );
}

export default App;
