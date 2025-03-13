import { Box, Typography } from "@mui/material";

const EventInformation = ({artistName, date, location}) => {
    
    return (
        <Box 
            height="125px" 
            bgcolor="papayawhip" 
            display="flex" 
            flexDirection="column"
            justifyContent="center"
            paddingLeft={4}
            marginBottom={4}
        >
            <Typography variant="h1">
                {artistName}
            </Typography>
            <Typography variant="subtitle1">
                {date}
            </Typography>
            <Typography variant="subtitle1">
                {location}
            </Typography>
        </Box>
    )
};

export default EventInformation;