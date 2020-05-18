import React from 'react';
import Lottie from 'react-lottie';

import cat from '../assets/animations/cat.json';

const CatAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cat,
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default CatAnimation;
