import { Box } from "@mui/material";
import { theme } from "..";

const BandBiography = ({ artistName, image, description}) => {

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
        sx={{
          width: '100%',
          maxWidth: '100%',
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
