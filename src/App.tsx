import { Stack } from "@mui/material";
import { Wizard } from "./components/Wizard";

const App: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <Stack
      component="main"
      width="100vw"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
      sx={{
        background: `url(${baseUrl}background.webp) no-repeat fixed left center / cover`,
      }}
    >
      <Wizard />
    </Stack>
  );
};

export default App;
