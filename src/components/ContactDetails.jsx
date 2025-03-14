import { Box, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const ContactDetails = ({ control, errors }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" gap={1}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{
            required: "First Name is required",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="first-name"
              label="First Name"
              sx={{ width: "50%" }}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              slotProps={{
                htmlInput: {
                  "data-testid": "first-name-input",
                },
              }}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{
            required: "Last Name is required",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="last-name"
              label="Last Name"
              sx={{ width: "50%" }}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              slotProps={{
                htmlInput: {
                  "data-testid": "last-name-input",
                },
              }}
            />
          )}
        />
      </Box>
      <Controller
        name="address"
        control={control}
        defaultValue=""
        rules={{
          required: "Address is required",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            required
            id="address"
            label="Address"
            error={!!errors.address}
            helperText={errors.address?.message}
            slotProps={{
              htmlInput: {
                "data-testid": "address-input",
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default ContactDetails;
