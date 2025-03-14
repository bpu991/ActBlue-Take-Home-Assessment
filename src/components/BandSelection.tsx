import React, { useState } from "react";
import { Container, Select, MenuItem, InputLabel, Box } from "@mui/material";
import EventInformation from "./EventInformation.tsx";
import BandBiography from "./BandBiography.tsx";
import BandForm from "./BandForm.tsx";
import theme from "../theme";

interface TicketType {
  type: string;
  name: string;
  description: string;
  cost: number;
}

export interface Band {
  name: string;
  id: string;
  date: number;
  location: string;
  description_blurb: string;
  imgUrl: string;
  ticketTypes: TicketType[];
}

export default function BandSelection({ bands }: {bands: Band[]}) {
  const [selectedBand, setSelectedBand] = useState<Band>(bands[0]);

  const { 
    date, 
    description_blurb, 
    imgUrl, 
    location,
    name,  
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
          if (currentBand) {
            setSelectedBand(currentBand);
          }
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
        <BandForm selectedBand={selectedBand} />
      </Box>
    </Container>
  );
}
