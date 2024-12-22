import { Button, Stack } from "@mui/material";
import React from "react";

const App: React.FC = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <h1>Christmas Gift Reveal</h1>
      <Button variant="contained" color="primary">
        Reveal Gift
      </Button>
    </Stack>
  );
};

export default App;
