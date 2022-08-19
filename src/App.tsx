import styled from "styled-components";
import PlayGround from "./components/Playground";

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
      <span className="fi fi-gr"></span> <span className="fi fi-gr fis"></span>
    </PlayGround>
  );
}

export default App;
