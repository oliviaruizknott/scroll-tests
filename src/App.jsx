import { useState } from "react";
import CanvasScroll from "./CanvasScroll";

function App() {
  const canvasScrollOptions = {
    firstFrame:
      "webp-conversions/Stork_Products_Redshift_v001_Boot_Preview_v001_0000.webp",
    frameCount: 450,
  };

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          background: "olive",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
        }}
      >
        [ FPO Content, Beginning ]
      </div>
      <div style={{ background: "gray" }}>
        <CanvasScroll {...canvasScrollOptions} />
      </div>
      <div style={{ background: "black" }}>
        <CanvasScroll {...canvasScrollOptions} />
      </div>
      <div
        style={{
          height: "100vh",
          background: "olive",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
        }}
      >
        [ FPO Content, End ]
      </div>
    </div>
  );
}

export default App;
