import PlayGround from "./components/Playground";
import { useState } from "react";
import { ProfileImage } from "./components/ProfileImage";
import { Button } from "./components/Button";
import { CodeInput } from "./components/CodeInput";
import { Loader } from "./components/Loader";

function App() {
  const [code, setCode] = useState("");
  console.log({ code });
  return (
    <PlayGround>
      <Loader />
      {/* // CustomSelect Margin */}
    </PlayGround>
  );
}

export default App;
