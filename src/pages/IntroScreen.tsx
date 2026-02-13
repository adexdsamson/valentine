import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../config';
import { useAudio } from '../hooks/useAudio';

const IntroScreen: React.FC = () => {
  const navigate = useNavigate();

  useAudio(config.intro.audioUrl, {
    muted: false,
    startTime: config.intro.audioStartTime,
    endTime: config.intro.audioEndTime,
    loop: false,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      navigate('/gallery');
    }, 9000);
    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <img
        src={config.intro.imageUrl}
        alt="Intro"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default IntroScreen;

