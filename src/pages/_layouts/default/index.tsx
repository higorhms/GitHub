import React from 'react';

import { Outlet } from 'react-router';
import { Container } from './styles';

const defaultLayout: React.FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default defaultLayout;
