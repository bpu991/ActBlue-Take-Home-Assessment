import React from "react";
import { Box } from "@mui/material";
import theme from "../theme";

interface BandBiographyProps {
  artistName: string;
  image: string;
  description: string;
};

const BandBiography = ({ artistName, image, description}: BandBiographyProps) => {

  return (
    <Box
    maxWidth="40%"
    sx={{
      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
        padding: 4,
      },
    }}
    >
      <Box
        component="img"
        width="100%"
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "block", 
            margin: "0 auto",
        },
        }}
        alt={`An image of ${artistName}`}
        src={image}
      />

      <Box padding={2} dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
  );
};

export default BandBiography;
