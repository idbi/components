import PlayGround from "./components/Playground";
import { useState } from "react";
import { ProfileImage } from "./components/ProfileImage";

function App() {
  const [imageSrc, setImageSrc] = useState<{ file: File; url: string }>();

  return (
    <PlayGround>
      <ProfileImage
        imageUrl={imageSrc?.url}
        onChange={(src) => setImageSrc(src)}
        size={128}
      />
    </PlayGround>
  );
}

export default App;
