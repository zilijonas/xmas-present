import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#2c5364", // Deep midnight blue
        light: "#4a7b96",
        dark: "#1a3f4d",
      },
      secondary: {
        main: "#8b0000", // Dark blood red
        light: "#b71c1c",
        dark: "#5f0000",
      },
      background: {
        default: "#0f1922", // Very dark blue-gray
        paper: "#1a2633",
      },
    },
  })
);
