import React from 'react';

import { Container } from './styles';

import CatAnimation from '../../animations/CatAnimation';

const Loading: React.FC = () => {
  return (
    <Container>
      <CatAnimation />
    </Container>
  );
};

export default Loading;
