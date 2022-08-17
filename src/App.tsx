import styled from "styled-components";
import { Button } from "./components/Button";
import PlayGround from "./components/Playground";
import { CodeInput } from "./types";

const Layout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 25px;
  gap: 13px;
`;

function App() {
  return (
    <PlayGround>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      {/* <CodeInput /> */}
      {/* <SelectField> */}
    </PlayGround>
  );
}

export default App;
