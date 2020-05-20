import React from 'react';
import Lottie from 'react-lottie';

import search from '../assets/animations/search.json';

const SearchAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: search,
  };

  return <Lottie options={defaultOptions} height={70} />;
};

export default SearchAnimation;
