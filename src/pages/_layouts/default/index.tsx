import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const defaultLayout: React.FC = ({ children }) => {
   return <Container container>{children}</Container>;
};

defaultLayout.propTypes = {
   children: PropTypes.element.isRequired,
};

export default defaultLayout;
