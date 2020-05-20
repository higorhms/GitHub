import React from 'react';
import Lottie from 'react-lottie';

import logoBlack from '../assets/animations/logoBlack.json';
import logoWhite from '../assets/animations/logoWhite.json';
import useTheme from '../hooks/useTheme';

const LogoAnimation: React.FC = () => {
  const { theme } = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: theme.title === 'dark' ? logoWhite : logoBlack,
  };

  return (
    <Lottie
      options={defaultOptions}
      width="80%"
      height="80%"
      style={{
        opacity: '0.2',
      }}
    />
  );
};

export default LogoAnimation;
