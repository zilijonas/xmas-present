import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: {
        fontSize: "3rem",
        "@media (min-width:600px)": {
          fontSize: "4.5rem",
        },
      },
      h2: {
        fontSize: "2rem",
        "@media (min-width:600px)": {
          fontSize: "3rem",
        },
      },
    },
  })
);
