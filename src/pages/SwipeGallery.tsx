 
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Music, Loader2, PauseCircle, PlayCircle } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { config } from '../config';
import { useAudio } from '../hooks/useAudio';
import { useImagePreloader } from '../hooks/useImagePreloader';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const SwipeGallery: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const pointerStart = useRef<{ x: number; y: number; t: number } | null>(null);
  const lastTapTimeRef = useRef<number>(0);
  const [overlayType, setOverlayType] = useState<'pause' | 'play' | null>(null);
  
  // Extract all image URLs for preloading
  const imageUrls = galleryData.map(item => item.imageUrl);
  const imagesLoaded = useImagePreloader(imageUrls);
  
  const currentItem = galleryData[currentIndex];
  
  const audioRef = useAudio(currentItem.audioUrl, {
    muted: isMuted,
    startTime: currentItem.audioStartTime,
    endTime: currentItem.audioEndTime,
  });

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection;

    if (nextIndex >= galleryData.length) {
      navigate('/letter');
    } else if (nextIndex >= 0) {
      setDirection(newDirection);
      setCurrentIndex(nextIndex);
    }
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const isInteractiveTarget = (el: EventTarget | null) => {
    if (!(el instanceof HTMLElement)) return false;
    return !!el.closest('button, a, input, textarea, select, [role="button"], [role="link"], [data-interactive="true"]');
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStart.current = { x: e.clientX, y: e.clientY, t: performance.now() };
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    // Ignore if interacting with UI controls
    if (isInteractiveTarget(e.target)) return;

    const now = performance.now();
    if (now - lastTapTimeRef.current < 300) {
      // debounce double taps
      return;
    }
    lastTapTimeRef.current = now;

    const dt = performance.now() - start.t;
    const dx = Math.abs(e.clientX - start.x);
    const dy = Math.abs(e.clientY - start.y);
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Treat as tap if quick and minimal movement
    if (dt < 250 && distance < 10) {
      try {
        const audio = audioRef.current;
        if (audio) {
          if (audio.paused) {
            audio.play().catch(() => {});
            setOverlayType('play');
            setTimeout(() => setOverlayType(null), 900);
          } else {
            audio.pause();
            setOverlayType('pause');
          }
        } else {
          // No audio currently available; show brief feedback
          setOverlayType('pause');
          setTimeout(() => {
            setOverlayType(null);
          }, 1200);
        }
      } catch {
        setOverlayType('pause');
        setTimeout(() => {
          setOverlayType(null);
        }, 1200);
      }
    }
  };

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <Loader2 size={48} className="animate-spin text-romantic-red mb-4" />
        <p className="font-serif text-xl animate-pulse">Loading memories...</p>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {/* Audio Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        className="absolute top-4 right-4 z-50 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Main Carousel */}
      <div className="relative w-full h-screen max-w-md mx-auto overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full flex flex-col items-center justify-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={galleryData[currentIndex].imageUrl} 
                alt={galleryData[currentIndex].message}
                className="w-full h-full object-cover"
                loading={currentIndex === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 text-center w-full mt-auto mb-20">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                <p className="text-2xl md:text-3xl font-serif text-white font-medium leading-relaxed drop-shadow-lg">
                  "{galleryData[currentIndex].message}"
                </p>
                <div className="mt-4 flex items-center justify-center text-white/60 text-sm">
                   <Music size={14} className="mr-2" />
                   <span>{galleryData[currentIndex].nowPlaying || `${config.galleryUI.nowPlayingPrefix} ${currentIndex + 1}`}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
            {overlayType && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-40 flex items-center justify-center"
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-full p-3 text-white">
                  {overlayType === 'pause' ? (
                    <PauseCircle size={36} className="text-romantic-red" />
                  ) : (
                    <PlayCircle size={36} className="text-romantic-red" />
                  )}
                </div>
              </motion.div>
            )}

        </AnimatePresence>
      </div>


      {/* Navigation Controls (Visible on Desktop) */}
      <div className="absolute bottom-10 left-0 right-0 z-50 flex flex-col items-center gap-4">
        {/* Page Indicators */}
        <div className="flex gap-2">
          {galleryData.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-8 md:hidden text-white/50 text-sm animate-pulse">
          <span>{config.galleryUI.swipeInstruction}</span>
        </div>
      </div>

      {/* Side Navigation for Desktop */}
      <button
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
        onClick={() => paginate(-1)}
        disabled={currentIndex === 0}
        style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
      >
        <ChevronLeft size={32} />
      </button>
      
      <button
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default SwipeGallery;
