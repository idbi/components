import PlayGround from "./components/Playground";
import { useState } from "react";
import { CustomSelect } from "@/components/CustomSelect";
import countries from "@/countries.json";
import { SelectField } from "./components/SelectField";
import styled from "styled-components";

interface ICountryLabel {
  label: string;
  value: string;
}

const OptionLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CountryLabel: React.FC<ICountryLabel> = ({ label, value }) => {
  return (
    <OptionLabelContainer>
      <img
        width="20"
        height="16"
        style={{
          marginRight: 8,
        }}
        src={`/flags/${value}.svg`}
      />
      {label}
    </OptionLabelContainer>
  );
};

function App() {
  const [country, setCountry] = useState({
    label: "51",
    value: "pe",
  });
  return (
    <PlayGround>
      <CustomSelect
        label="País"
        options={countries.map((country: any) => ({
          value: country.alpha2,
          label: country.prefix,
        }))}
        placeholder="Busca un país"
        value={country}
        onChange={(value) => setCountry(value)}
        formatOptionLabel={(option) => (
          <CountryLabel label={`+${option.label}`} value={option.value} />
        )}
        // formatOptionLabel={(option) => (
        //   <div>
        //     <img
        //       width="20"
        //       height="16"
        //       style={{
        //         marginRight: 8,
        //       }}
        //       src={`/flags/4x3/${option.value}.svg`}
        //     />
        //     {option.label} - {option.value.toUpperCase()}
        //   </div>
        // )}
        autoSize
        fullWidth
      />
    </PlayGround>
  );
}

export default App;
