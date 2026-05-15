import rainUrl from "../Mp3/Rain.mp3";
import forestUrl from "../Mp3/Forest.mp3";
import fireplaceUrl from "../Mp3/Fireplace.mp3";

/**
 * Ambient MP3s in `src/Mp3/` (resolved by Vite during build).
 */
export const ENVIRONMENT_SOUNDS = [
  {
    id: "rain",
    label: "Rain",
    src: rainUrl,
  },
  {
    id: "forest",
    label: "Forest",
    src: forestUrl,
  },
  {
    id: "fireplace",
    label: "Fireplace",
    src: fireplaceUrl,
  },
] as const;

export type EnvironmentSoundId = (typeof ENVIRONMENT_SOUNDS)[number]["id"];
