import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import theme from "../theme";
const EventInformation = ({ artistName, date, location }) => {
    
  const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(new Date(timestamp));
  };

  const formattedDate = formatDate(date);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginBottom={4}
      gap={2}
      sx={{
        [theme.breakpoints.down("md")]: {
          paddingLeft: 4,
        },
      }}
    >
      <Typography variant="h1">{artistName}</Typography>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "normal",
          [theme.breakpoints.down("md")]: {
            alignItems: "flex-start",
          },
        }}
      >
        <CalendarMonthIcon />
        <Typography variant="h2">{formattedDate}</Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        sx={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "normal",
          [theme.breakpoints.down("md")]: {
            alignItems: "flex-start",
          },
        }}
      >
        <LocationOnIcon />
        <Typography variant="h2">{location}</Typography>
      </Box>
    </Box>
  );
};

export default EventInformation;
