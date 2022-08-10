import ButtonV2 from "./components/ButtonV2";
import { Input } from "./components/Input";
import PlayGround from "./components/Playground";
import { TextInput } from "./components/TextInput";
import GoogleIcon from "./icons/GoogleIcon";

function App() {
  return (
    <PlayGround>
      <TextInput value="Railly" disabled leftAddon={<GoogleIcon />} error />
      <TextInput leftAddon={<GoogleIcon />} success />
      <ButtonV2 design="link" as="a">
        Hello
      </ButtonV2>
      <ButtonV2 design="solid">Hello</ButtonV2>
    </PlayGround>
  );
}

export default App;
