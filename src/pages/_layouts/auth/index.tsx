import React from 'react';
import { Outlet } from 'react-router';

import { Container } from './styles';
import Header from '../../../components/Header';
import BottomNavigator from '../../../components/BottomNavigator';

const authLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <BottomNavigator />
    </>
  );
};

export default authLayout;
