import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { theme } from "./core/theme.ts";
import { WizardProvider } from "./core/wizard-context.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <WizardProvider maxSteps={11}>
        <App />
      </WizardProvider>
    </ThemeProvider>
  </StrictMode>
);
