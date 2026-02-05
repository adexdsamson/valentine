import { config } from '../config';

export interface PhotoData {
  id: number;
  imageUrl: string;
  message: string;
  audioUrl: string;
  audioStartTime?: number; // Start time in seconds
  audioEndTime?: number;   // End time in seconds
  nowPlaying?: string;     // Custom "Now Playing" text for this track
}

export const galleryData: PhotoData[] = config.gallery;
