export function createAudio(src, options = {}) {
  if (typeof window === "undefined") return null;

  const audio = new Audio(src);
  audio.loop = options.loop ?? false;
  audio.volume = options.volume ?? 1;
  audio.preload = "auto";

  return audio;
}

export async function safePlay(audio) {
  if (!audio) return;

  try {
    await audio.play();
  } catch {
    // Browser may block autoplay until user interacts
  }
}

export function stopAudio(audio) {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}