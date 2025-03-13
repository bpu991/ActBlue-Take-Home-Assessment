import { Box, TextField } from "@mui/material";

const ContactDetails = ({ register, errors }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" gap={1}>
        <TextField
          required
          id="first-name"
          label="First Name"
          sx={{ width: "50%" }}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          {...register("firstName", {
            required: "First Name is required",
          })}
        />
        <TextField
          required
          id="last-name"
          label="Last Name"
          sx={{ width: "50%" }}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          {...register("lastName", {
            required: "Last Name is required",
          })}
        />
      </Box>
      <TextField fullWidth required id="address" label="Address"error={!!errors.address}
          helperText={errors.address?.message}
          {...register("address", {
            required: "Address is required",
          })} />
    </Box>
  );
};

export default ContactDetails;
