import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a time string (mm:ss) to total seconds.
 * Example: "2:00" -> 120, "1:30" -> 90
 * @param timeStr - The time string in "mm:ss" format or just seconds "ss"
 * @returns Total seconds as a number
 */
export function timeToSeconds(timeStr: string | number): number {
  if (typeof timeStr === 'number') return timeStr;
  
  const parts = timeStr.split(':');
  if (parts.length === 2) {
    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);
    return minutes * 60 + seconds;
  }
  return parseInt(timeStr, 10);
}
