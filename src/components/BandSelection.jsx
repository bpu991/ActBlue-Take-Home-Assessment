import React, { useState } from "react";
import { Container, Select, MenuItem, InputLabel, Box } from "@mui/material";
import EventInformation from "./EventInformation";
import BandBiography from "./BandBiography";
import BandForm from "./BandForm";
import theme from "../theme";

export default function BandSelection({ bands }) {
  const [selectedBand, setSelectedBand] = useState(bands[0]);

  const { 
    date, 
    description_blurb, 
    imgUrl, 
    location,
    name, 
    ticketTypes 
  } = selectedBand;

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <InputLabel id="artist-select-label">Artist Selection</InputLabel>
      <Select
        labelId="artist-select-label"
        id="artist-select"
        value={selectedBand.name}
        onChange={(e) => {
          const currentBand = bands.find((band) => band.name === e.target.value);
          setSelectedBand(currentBand);
        }}
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        {bands.map((band) => (
          <MenuItem key={band.id} value={band.name}>
            {band.name}
          </MenuItem>
        ))}
      </Select>

      <EventInformation artistName={name} date={date} location={location} />

      <Box
        display="flex"
        gap={4}
        sx={{
            [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <BandBiography artistName={name} image={imgUrl} description={description_blurb} />
        <BandForm ticketTypes={ticketTypes} selectedBand={selectedBand} />
      </Box>
    </Container>
  );
}
