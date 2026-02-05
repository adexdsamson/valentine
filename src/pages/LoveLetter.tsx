/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, RefreshCw, Volume2, VolumeX } from 'lucide-react';
import { config } from '../config';
import { useAudio } from '../hooks/useAudio';

const LoveLetter: React.FC = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const fullText = config.loveLetter.text;
  const typingSpeed = config.loveLetter.typingSpeed;

  useAudio(config.loveLetter.audioUrl, {
    muted: isMuted,
    startTime: config.loveLetter.audioStartTime,
    endTime: config.loveLetter.audioEndTime,
  });

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        setIsFinished(true);
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-cream via-pink-100 to-romantic-pink/20 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {isFinished && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', opacity: 0, scale: 0.5 }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            style={{ left: `${Math.random() * 100}%` }}
            className="absolute text-romantic-red/20"
          >
            <Heart size={30 + Math.random() * 30} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Audio Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        className="absolute top-4 right-4 z-50 p-2 bg-white/50 backdrop-blur-md rounded-full text-romantic-red hover:bg-white/80 transition-colors shadow-sm"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Letter Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl max-w-2xl w-full border border-romantic-pink/30 relative z-10"
      >
        <div className="font-serif text-xl md:text-2xl leading-relaxed text-gray-800 whitespace-pre-wrap">
          {displayedText}
          {!isFinished && (
            <span className="animate-pulse border-r-2 border-romantic-red ml-1">&nbsp;</span>
          )}
        </div>

        {isFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 bg-romantic-red text-white rounded-full font-bold shadow-lg hover:bg-red-600 transition-all transform hover:scale-105"
            >
              <RefreshCw size={20} />
              Replay Experience
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LoveLetter;
