import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Ticket from "./Ticket";
import ContactDetails from "./ContactDetails";
import PaymentDetails from './PaymentDetails';
const BandForm = ({ band }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box bgcolor={"palegreen"} width="60%" padding={4}>
      <form>
        <Box display="flex" flexDirection="column" gap={2}>
          <Ticket
            ticketType="General Admission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            cost={15000}
          />
          <Ticket
            ticketType="General Admission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            cost={15000}
          />
          <Ticket
            ticketType="General Admission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            cost={15000}
          />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2">TOTAL</Typography>
            <Typography>$0</Typography>
          </Box>
          <ContactDetails />
          <PaymentDetails />
          <Button type="submit" fullWidth variant="contained">
            Get Tickets
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BandForm;
