import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";
import BandSelection from "./components/BandSelection.tsx";
import React from "react";

const bands = [skaBand, kpopBand, punkBand];

function App() {
  return (
    <BandSelection bands={bands} />
  )
}

export default App;
