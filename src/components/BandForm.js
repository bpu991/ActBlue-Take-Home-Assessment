import { Box } from "@mui/material";

const BandForm = ({ band }) => {
  return (
    <Box 
      bgcolor={"palegreen"} 
      width="60%" 
      height="400px"
      padding={4}
    >
      <h1>{band.name}</h1>
      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </Box>
  );
};

export default BandForm;
