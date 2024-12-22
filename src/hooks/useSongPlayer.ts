import { useEffect, useRef, useState } from "react";

export function useSongPlayer() {
  const [songSrc, setSongSrc] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    if (songSrc) {
      audioRef.current.src = songSrc;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [songSrc]);

  return {
    currentSong: songSrc,
    setSongSrc,
  };
}
