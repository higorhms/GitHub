import React from 'react';
import PropTypes from 'prop-types';

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

authLayout.propTypes = {
   children: PropTypes.element.isRequired,
};
