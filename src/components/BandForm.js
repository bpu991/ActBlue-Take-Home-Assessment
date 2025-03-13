import { useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Ticket from "./Ticket";
import ContactDetails from "./ContactDetails";
import PaymentDetails from "./PaymentDetails";
import { theme } from "..";

const BandForm = ({ ticketTypes }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      // creates a new object from the ticketTypes prop that keeps track of how many of each type of ticket
      // is being purchased
      // ex) {general: 0, vip: 2, meet-and-greet: 0}
      tickets: ticketTypes.reduce((ticketQuantities, ticket) => {
        ticketQuantities[ticket.type] = 0;
        return ticketQuantities;
      }, {}),
      firstName: "",
      lastName: "",
      address: "",
      creditCardNumber: "",
      expirationDate: "",
      cvv: "",
      totalCost: 0,
    },
  });

  const ticketsAddedToCart = watch("tickets");

  const calculateTotalCost = ticketTypes.reduce((total, ticket) => {
    const quantity = ticketsAddedToCart?.[ticket.type] || 0;
    return total + quantity * (ticket.cost / 100);
  }, 0);

  useEffect(() => {
    setValue("totalCost", calculateTotalCost);
  }, [ticketsAddedToCart, setValue, calculateTotalCost]);

  const hasSelectedTickets = () => {
    // checks to see if at least 1 ticket has been selected
    return Object.values(ticketsAddedToCart).some((quantity) => quantity > 0);
  }

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    alert('Form Submitted Successfully')
  };

  return (
    <Box
      padding={4}
      bgcolor="#f6faff"
      borderRadius={2}
      sx={{
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
          padding: 4,
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant='h2' fontWeight={700}>
            Select Tickets
          </Typography>
          {ticketTypes.map((ticket, index) => (
            <Ticket
              key={`${ticket.type}-${index}`}
              ticketType={ticket.type}
              ticketName={ticket.name}
              description={ticket.description}
              cost={ticket.cost}
              register={register}
            />
          ))}
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2">TOTAL</Typography>
            <Typography variant="h2">${calculateTotalCost.toFixed(2)}</Typography>
          </Box>
          <ContactDetails register={register} errors={errors} />
          <PaymentDetails register={register} errors={errors} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid || !hasSelectedTickets()}
          >
            Get Tickets
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BandForm;
