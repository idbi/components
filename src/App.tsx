import { useState } from "react";
import CodeInput from "./components/CodeInput";
import PlayGround from "./components/Playground";
import { Text } from "./components/Typography";

function App() {
  const [code, setCode] = useState("");

  return (
    <PlayGround>
      <CodeInput
        id="code"
        value={code}
        onChange={(value) => {
          setCode(value);
        }}
      />
      <Text size="sm">{code}</Text>
    </PlayGround>
  );
}

export default App;
