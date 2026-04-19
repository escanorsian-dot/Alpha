export function createAudio(src, options = {}) {
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.loop = options.loop ?? false;
  audio.volume = options.volume ?? 1;
  return audio;
}

export async function safePlay(audio) {
  if (!audio) return;

  try {
    await audio.play();
  } catch (error) {
    console.warn("Audio play blocked or failed:", error);
  }
}

export function stopAudio(audio) {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}