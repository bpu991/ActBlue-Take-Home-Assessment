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
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      tickets: ticketTypes.reduce((acc, ticket) => {
        acc[ticket.type] = 0;
        return acc;
      }, {}),
      firstName: "",
      lastName: "",
      address: "",
      creditCardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  });

  const ticketsAddedToCart = watch("tickets");

  const totalCost = ticketTypes.reduce((total, ticket) => {
    const quantity = ticketsAddedToCart?.[ticket.type] || 0;
    return total + quantity * (ticket.cost / 100);
  }, 0);

  const hasSelectedTickets = () => {
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
          {ticketTypes.map((ticket) => (
            <Ticket
              ticketType={ticket.type}
              ticketName={ticket.name}
              description={ticket.description}
              cost={ticket.cost}
              register={register}
            />
          ))}
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2">TOTAL</Typography>
            <Typography variant="h2">${totalCost.toFixed(2)}</Typography>
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
