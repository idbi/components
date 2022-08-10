import Skeleton from "react-loading-skeleton";
import ButtonV2 from "./components/ButtonV2";
import { Input } from "./components/Input";
import PlayGround from "./components/Playground";
import SelectInput from "./components/SelectInput";
import { TextInput } from "./components/TextInput";
import GoogleIcon from "./icons/GoogleIcon";

const getCountrySVG = (country: string) => {
  switch (country) {
    case "pe":
      return <Peru />;
    default:
      return <GoogleIcon />;
  }
};

const CountryOption = ({ value, children }) => (
  <div style={{ display: "flex", gap: "0.5rem" }}>
    {getCountrySVG(value)}
    {children}
  </div>
);

function App() {
  return (
    <PlayGround>
      <SelectInput
        value={{ value: "2", label: "Two" }}
        options={[
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
          { value: "4", label: "Four" },
          { value: "5", label: "Five" },
          { value: "6", label: "Six" },
          { value: "7", label: "Seven" },
        ]}
        onChange={(e) => console.log(e)}
      />
      <SelectInput
        value={{ value: "2", label: "Two" }}
        options={[
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
          { value: "4", label: "Four" },
          { value: "5", label: "Five" },
          { value: "6", label: "Six" },
          { value: "7", label: "Seven" },
        ]}
        onChange={(e) => console.log(e)}
        formatOptionLabel={(option) => (
          <CountryOption value={option.value}>{option.label}</CountryOption>
        )}
      />
    </PlayGround>
  );
}

export default App;
