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
    }, 17000);
    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <div className="intro-wrapper bg-black">
      <div className="intro-landscape flex items-center justify-center">
        <img
          src={config.intro.imageUrl}
          alt="Intro"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default IntroScreen;
