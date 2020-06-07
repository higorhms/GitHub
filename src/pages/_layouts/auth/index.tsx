import React from 'react';
import { Outlet } from 'react-router';

import { Container } from './styles';
import Header from '../../../components/Header';
import BottomNavigator from '../../../components/BottomNavigator';

const authLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <BottomNavigator />
    </Container>
  );
};

export default authLayout;
