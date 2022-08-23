import PlayGround from "./components/Playground";
import { useState } from "react";
import { ProfileImage } from "./components/ProfileImage";
import { Button } from "./components/Button";

function App() {
  const [imageSrc, setImageSrc] = useState<{ file: File; url: string }>();

  return (
    <PlayGround>
      <ProfileImage
        imageUrl={imageSrc?.url}
        onChange={(src) => setImageSrc(src)}
        size={128}
      />
      <Button shape="circular">Continuar con correo electrónico</Button>
    </PlayGround>
  );
}

export default App;
