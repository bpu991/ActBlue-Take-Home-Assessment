import { Box } from '@mui/material';
import { theme } from '..';

const BandBiography = () => {

    return (
        <Box bgcolor={"dodgerblue"}
        sx={{
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
          padding: 4,
        },
      }}
        >
            <Box bgcolor={"red"} width="100%" height="200px" display="flex" justifyContent="center" alignItems="center">
                This is an image
            </Box>
            <Box padding={2}>
                <div>
                    <b>Come see the world sensation BTESS! ONE NIGHT ONLY!!!</b>
                    <p>You'll dance.</p>
                    <p>You'll sing.</p>
                    <p>You'll cry.</p>
                    <p>You'll feel all the feels.</p>
                </div>
            </Box>
        </Box>
    )
};

export default BandBiography;