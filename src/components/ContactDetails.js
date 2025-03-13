import { Box, Typography, TextField, useTheme } from "@mui/material";

const ContactDetails = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" gap={1}>
        <TextField
          required
          id="first-name"
          label="First Name"
          sx={{
            width: "50%",
          }}
        />
        <TextField
          required
          id="last-name"
          label="Last Name"
          sx={{ width: "50%" }}
        />
      </Box>
      <TextField fullWidth required id="address" label="Address" />
    </Box>
  );
};

export default ContactDetails;
