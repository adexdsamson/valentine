import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { config } from '../config';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    setNoScale((prev) => Math.max(0.2, prev - 0.15)); // Minimum 20% size
    setYesScale((prev) => Math.min(2, prev + 0.2));   // Maximum 200% size
    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    navigate('/gallery');
  };

  // Generate floating hearts for background
  const floatingHearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
  }));

  const getNoButtonText = () => {
    const texts = config.landingPage.noButtonTexts;
    return texts[Math.min(noClickCount, texts.length - 1)];
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-romantic-cream via-pink-100 to-romantic-pink/20">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: '110vh', opacity: 0 }}
            animate={{ y: '-10vh', opacity: [0, 1, 0] }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear"
            }}
            style={{ left: heart.left }}
            className="absolute text-romantic-pink/40"
          >
            <Heart size={24 + Math.random() * 24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 flex flex-col items-center text-center p-8"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 text-romantic-red"
        >
          <Heart size={64} fill="currentColor" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-romantic-red mb-12 drop-shadow-sm">
          {config.landingPage.headline}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <motion.button
            layout
            style={{ scale: yesScale }}
            onClick={handleYesClick}
            whileHover={{ scale: yesScale * 1.1 }}
            whileTap={{ scale: yesScale * 0.95 }}
            aria-label="Yes, I will be your valentine"
            className="px-8 py-4 bg-romantic-red text-white text-xl font-bold rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
          >
            {config.landingPage.yesButtonText}
          </motion.button>

          <motion.button
            layout
            style={{ scale: noScale }}
            onClick={handleNoClick}
            whileHover={{ scale: noScale * 1.1 }}
            whileTap={{ scale: noScale * 0.95 }}
            aria-label="No, I decline"
            className="px-8 py-4 bg-white text-romantic-red border-2 border-romantic-red text-xl font-bold rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap"
          >
            {getNoButtonText()}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
