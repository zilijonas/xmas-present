import { useCallback, useRef } from "react";

type SoundName = "correct" | "incorrect" | "lesgo";

export function useSoundPlayer() {
  const baseUrl = import.meta.env.BASE_URL;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = useCallback(
    (soundName: SoundName) => {
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }

      audioRef.current.src = `${baseUrl}assets/sounds/${soundName}.mp3`;
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;
      audioRef.current.play().catch(() => {});
    },
    [baseUrl]
  );

  return { playSound };
}
