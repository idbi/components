import PlayGround from "./components/Playground";
import { useState } from "react";
import { CustomSelect } from "@/components/CustomSelect";
import countries from "@/countries.json";
import { SelectField } from "./components/SelectField";

function App() {
  const [country, setCountry] = useState({
    label: "Perú",
    value: "pe",
  });
  return (
    <PlayGround>
      {/* <SelectField
        options={countries.map((country: any) => ({
          value: country.alpha2,
          label: country.prefix,
        }))}
        value={{
          value: "pe-Perú",
          label: "51",
        }}
        onChange={(value) => console.log(value)}
        formatOptionLabel={(option) => (
          <div className="option">
            <img
              width="16"
              height="12"
              src={`/flags/4x3/${option.value.split("-")[0]}.svg`}
            />
            +{option.label}
          </div>
        )}
      /> */}
      <CustomSelect
        label="País"
        options={countries.map((country: any) => ({
          value: country.alpha2,
          label: country.name,
        }))}
        placeholder="Busca un país"
        value={country}
        onChange={(value) => setCountry(value)}
        formatOptionLabel={(option) => (
          <div>
            <img
              width="20"
              height="16"
              style={{
                marginRight: 8,
              }}
              src={`/flags/4x3/${option.value}.svg`}
            />
            {option.label} - {option.value.toUpperCase()}
          </div>
        )}
        formatSelectedOption={(option) => (
          <div>
            <img
              width="20"
              height="16"
              style={{
                marginRight: 8,
              }}
              src={`/flags/4x3/${option.value}.svg`}
            />
            {option.value.toUpperCase()}
          </div>
        )}
        autoSize
        fullWidth
        searchable={false}
      />
    </PlayGround>
  );
}

export default App;
