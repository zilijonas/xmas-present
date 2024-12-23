import { Stack } from "@mui/material";
import { Wizard } from "./components/Wizard";

const App: React.FC = () => {
  return (
    <Stack
      component="main"
      width="100vw"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
      sx={{
        background: "url(/background.webp) no-repeat fixed left center / cover",
      }}
    >
      <Wizard />
    </Stack>
  );
};

export default App;
