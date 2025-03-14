import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.7rem",
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      md: 900,
      lg: 1200,
    },
  },
});

export default theme;