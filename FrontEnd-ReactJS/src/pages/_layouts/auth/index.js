import React from 'react';

import { Container } from './styles';
import Navbar from '../../../components/Navbar';

export default function authLayout({ children }) {
   return (
      <Container>
         <Navbar />
         {children}
      </Container>
   );
}
