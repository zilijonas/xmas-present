import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSongPlayer } from "./hooks/useSongPlayer";

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const { currentSong, setSongSrc } = useSongPlayer();

  const handleStartClick = () => {
    setSongSrc("/assets/songs/song1.mp3");
    setStarted(true);
  };

  const handleRevealClick = () => {
    setSongSrc("/assets/songs/song2.mp3");
  };

  return (
    <Stack
      component="main"
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        p={4}
      >
        <Typography variant="h1" align="center">
          Christmas Gift Reveal
        </Typography>
        {!started && (
          <Typography variant="h2" align="center" gutterBottom>
            Are you ready to reveal your gift?
          </Typography>
        )}
        {!started && (
          <Button variant="contained" onClick={handleStartClick}>
            Hell yeah!
          </Button>
        )}
        {started && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleRevealClick}
          >
            Reveal Gift
          </Button>
        )}
        <p>Currently playing: {currentSong || "None"}</p>
      </Stack>
    </Stack>
  );
};

export default App;
