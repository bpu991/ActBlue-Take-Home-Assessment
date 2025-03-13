import { Container, Box } from "@mui/material";
import BandBiography from "./components/BandBiography";
import EventInformation from "./components/EventInformation";
import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandForm from "./components/BandForm";
import { theme } from ".";

function App() {
  const bands = [skaBand, kpopBand, punkBand];

  return (
    <Container
      className="App"
      maxWidth="lg"
      sx={{ paddingTop: 4, paddingBottom: 4 }}
    >
      <EventInformation artistName={bands[0].name} date={bands[0].date} location={bands[0].location} />

      <Box
        display="flex"
        gap={4}
        sx={{
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <BandBiography artistName={bands[0].name} image={bands[0].imgUrl} description={bands[0].description_blurb} />
        <BandForm ticketTypes={bands[0].ticketTypes} />
      </Box>
    </Container>
  );
}

export default App;
