import { Box, Typography, TextField } from "@mui/material";
import { theme } from "../index";

const Ticket = ({ ticketType, description, cost }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      borderBottom="1px solid grey"
      paddingTop={2}
      paddingBottom={2}
      sx={{
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h3">{ticketType}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography>$cost</Typography>
      </Box>
      <TextField
        id="outlined-number"
        defaultValue={0}
        label="Amount"
        type="number"
        slotProps={{
          htmlInput: {
            min: 0,
          },
        }}
        sx={{
          minWidth: 70,
          maxWidth: 90,
          [theme.breakpoints.down("sm")]: {
            alignSelf: "flex-end",
          },
        }}
      />
    </Box>
  );
};

export default Ticket;
