import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Navbar from '../../../components/Navbar';

const authLayout: React.FC = ({ children }) => {
   return (
      <Container container>
         <Navbar />
         {children}
      </Container>
   );
};

authLayout.propTypes = {
   children: PropTypes.element.isRequired,
};

export default authLayout;
