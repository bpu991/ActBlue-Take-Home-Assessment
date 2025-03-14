import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { FormValues } from './BandForm.tsx';
import theme from "../theme";

interface TicketProps {
  ticketName: string;
  ticketType: string;
  description: string;
  cost: number;
  control: Control<FormValues>;
};

const Ticket = ({ ticketName, ticketType, description, cost, control }: TicketProps) => {
  const formattedCost = cost / 100;
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      borderBottom="1px solid grey"
      paddingTop={2}
      paddingBottom={2}
      sx={{
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "flex-start",
        },
      }}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h3">{ticketName}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography>${formattedCost.toFixed(2)}</Typography>
      </Box>
      <Controller
        name={`tickets.${ticketType}`}
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            id={`${ticketType}-id`}
            label="Amount"
            type="number"
            slotProps={{
              htmlInput: {
                min: 0,
                'data-testid': `${ticketType}-quantity-input`
              },
            }}
            sx={{
              minWidth: 70,
              maxWidth: 90,
              [theme.breakpoints.down("md")]: {
                alignSelf: "flex-end",
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default Ticket;
