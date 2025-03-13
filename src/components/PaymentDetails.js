import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const PaymentDetails = ({ register, errors }) => {
  // formats the expiration date from 0228 to 02/28
  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    e.target.value = value;
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h2">Payment Details</Typography>
      <TextField
        required
        fullWidth
        id="credit-card-number"
        label="Credit Card"
        placeholder="0000 0000 0000 0000"
        slotProps={{
          htmlInput: {
            maxLength: 16,
          },
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <CreditCardIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        error={!!errors.creditCardNumber}
        helperText={errors.creditCardNumber?.message}
        {...register("creditCardNumber", {
          required: "Credit Card Number is required",
          pattern: {
            value: /^[0-9]{16}$/, // Not a regex expert: makes sure the string is 16 characters and only numbers
            message: "Invalid credit card number",
          },
        })}
      />
      <Box display="flex" gap={1}>
        <TextField
          required
          id="expiration-date"
          label="Expiration Date"
          placeholder="MM/YY"
          slotProps={{
            htmlInput: {
              maxLength: 5,
              onInput: handleInputChange,
            },
          }}
          sx={{ width: "50%" }}
          error={!!errors.expirationDate}
          helperText={errors.expirationDate?.message}
          {...register("expirationDate", {
            required: "Expiration date is required",
            pattern: {
              value: /^[0-9]{2}\/[0-9]{2}$/,
              message: "Invalid expiration date",
            },
          })}
        />
        <TextField
          required
          id="cvv"
          label="CVV"
          sx={{ width: "50%" }}
          slotProps={{
            htmlInput: {
              maxLength: 3,
            },
          }}
          error={!!errors.cvv}
          helperText={errors.cvv?.message}
          {...register("cvv", {
            required: "CVV is required",
            pattern: {
              value: /^[0-9]{3}$/, // Not a regex expert: makes sure the string is 3 characters and only numbers
              message: "Invalid CVV",
            },
          })}
        />
      </Box>
    </Box>
  );
};

export default PaymentDetails;
