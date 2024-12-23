import { useCallback, useEffect, useRef, useState } from "react";

type SongName = "xmas-lofi" | "potter" | "sweet-child";

export function useSongPlayer() {
  const baseUrl = import.meta.env.BASE_URL;
  const [songSrc, setSongSrc] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const changeSong = useCallback(
    (songName: SongName) => {
      setSongSrc(`${baseUrl}assets/songs/${songName}.mp3`);
    },
    [baseUrl]
  );

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.05;
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
    changeSong,
  };
}
