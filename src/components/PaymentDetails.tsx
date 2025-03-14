import React from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { FormValues } from "./BandForm";

interface PaymentDetailsProps {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>
};

const PaymentDetails = ({ control, errors }: PaymentDetailsProps) => {
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
      <Controller
        name="creditCardNumber"
        control={control}
        defaultValue=""
        rules={{
          required: "Credit Card Number is required",
          pattern: {
            value: /^[0-9]{16}$/, // note: not a regex expert - verifies the string is 16 characters and only numbers
            message: "Invalid credit card number",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            required
            fullWidth
            id="credit-card-number"
            label="Credit Card"
            placeholder="0000 0000 0000 0000"
            slotProps={{
              htmlInput: {
                "data-testid": "credit-card-number-input",
                maxLength: 16,
              },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <CreditCardIcon />
                  </InputAdornment>
                ),
              },
            }}
            error={!!errors.creditCardNumber}
            helperText={errors.creditCardNumber?.message}
          />
        )}
      />
      <Box display="flex" gap={1}>
        <Controller
          name="expirationDate"
          control={control}
          defaultValue=""
          rules={{
            required: "Expiration date is required",
            pattern: {
              value: /^[0-9]{2}\/[0-9]{2}$/,
              message: "Invalid expiration date",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="expiration-date"
              label="Expiration Date"
              placeholder="MM/YY"
              slotProps={{
                htmlInput: {
                  "data-testid": "expiration-date-input",
                  maxLength: 5,
                  onInput: handleInputChange,
                },
              }}
              sx={{ width: "50%" }}
              error={!!errors.expirationDate}
              helperText={errors.expirationDate?.message}
            />
          )}
        />
        <Controller
          name="cvv"
          control={control}
          defaultValue=""
          rules={{
            required: "CVV is required",
            pattern: {
              value: /^[0-9]{3}$/, // note: not a regex expert - verifies the string is 3 characters and only numbers
              message: "Invalid CVV",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="cvv"
              label="CVV"
              sx={{ width: "50%" }}
              slotProps={{
                htmlInput: {
                  "data-testid": "cvv-input",
                  maxLength: 3,
                },
              }}
              error={!!errors.cvv}
              helperText={errors.cvv?.message}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default PaymentDetails;
