import React from 'react';
import { Outlet } from 'react-router';

import { Container } from './styles';
import Header from '../../../components/Header';

const authLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default authLayout;
