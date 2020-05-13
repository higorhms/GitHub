import React from 'react';

import { Container } from './styles';
import Navbar from '../../../components/Navbar';

const authLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default authLayout;
