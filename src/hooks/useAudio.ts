/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

interface UseAudioOptions {
  muted: boolean;
  startTime?: number;
  endTime?: number;
  volume?: number;
  loop?: boolean;
}

/**
 * Custom hook to manage audio playback with support for segments and looping.
 * @param url - The URL of the audio file.
 * @param options - Configuration options for audio playback.
 */
export const useAudio = (url: string, options: UseAudioOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!url) return;

    const audio = new Audio(url);
    audioRef.current = audio;
    audio.preload = 'auto';
    audio.volume = options.volume ?? 0.5;
    audio.loop = options.loop ?? true;
    
    const startTime = options.startTime ?? 0;
    audio.currentTime = startTime;

    const handleTimeUpdate = () => {
      if (options.endTime && audio.currentTime >= options.endTime) {
        audio.currentTime = startTime;
        // Ensure playback continues if it somehow paused
        if (!audio.paused) {
           audio.play().catch(() => {}); 
        }
      }
    };

    if (options.endTime) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
    }

    if (!options.muted) {
      audio.play().catch((error) => {
        console.warn('Audio play failed (interaction needed or invalid URL):', error);
      });
    }

    return () => {
      audio.pause();
      if (options.endTime) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      }
      audioRef.current = null;
    };
  }, [url, options.startTime, options.endTime, options.volume, options.loop]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (options.muted) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
            console.warn('Audio play failed on unmute:', error);
        });
      }
    }
  }, [options.muted]);

  return audioRef;
};
