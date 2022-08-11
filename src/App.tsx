import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import ButtonV2 from "./components/ButtonV2";
import { CodeInput } from "./components/CodeInput";
import { Input } from "./components/Input";
import PlayGround from "./components/Playground";
import SelectInput from "./components/SelectInput";
import { TextInput } from "./components/TextInput";
import { Text } from "./components/Typography";
import GoogleIcon from "./icons/GoogleIcon";

function App() {
  const [code, setCode] = useState("3050");
  const [code2, setCode2] = useState("2022");

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
      {/* <CodeInput
        id="code-2"
        success
        value={code2}
        onChange={(value) => {
          setCode2(value);
        }}
      />
      <Text size="sm">{code2}</Text> */}
    </PlayGround>
  );
}

export default App;
