import { useState, useEffect } from 'react';

/**
 * Custom hook to preload a list of images.
 * @param imageUrls - Array of image URLs to preload.
 * @returns boolean - True if all images have finished loading (or failed), false otherwise.
 */
export const useImagePreloader = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      const promises = imageUrls.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject; // We resolve even on error to avoid blocking the app
        });
      });

      try {
        await Promise.allSettled(promises);
        if (isMounted) {
          setImagesLoaded(true);
        }
      } catch (error) {
        console.error('Error preloading images:', error);
        // Even if some fail, we probably want to let the user proceed
        if (isMounted) {
          setImagesLoaded(true);
        }
      }
    };

    if (imageUrls.length > 0) {
      preloadImages();
    } else {
      setImagesLoaded(true);
    }

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return imagesLoaded;
};
