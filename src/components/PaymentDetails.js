import { Box, Typography, TextField, useTheme } from "@mui/material";

const PaymentDetails = () => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Typography>
                Payment Details
            </Typography>
            <TextField fullWidth required id="credit-card-number" label="Credit Card" placeholder="0000 0000 0000 0000" />
            <Box display="flex" gap={1}>
                <TextField
                    required
                    id="expiration-date"
                    label="Expiration Date"
                    placeholder="MM / YY"
                    sx={{
                        width: "50%",
                    }}
                />
                <TextField
                    required
                    id="cvv"
                    label="CVV"
                    sx={{ width: "50%" }}
                />
            </Box>
        </Box>
    )
};

export default PaymentDetails;