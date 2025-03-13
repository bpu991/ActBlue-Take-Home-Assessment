import { Box, Typography } from "@mui/material";

const EventInformation = () => {

    return (
        <Box 
            width="100%" 
            height="125px" 
            bgcolor="papayawhip" 
            display="flex" 
            flexDirection="column"
            justifyContent="center"
            paddingLeft={4}
            marginBottom={4}
        >
            <Typography variant="h1">
                Band Name
            </Typography>
            <Typography variant="subtitle1">
                Date
            </Typography>
            <Typography variant="subtitle1">
                Location
            </Typography>
        </Box>
    )
};

export default EventInformation;