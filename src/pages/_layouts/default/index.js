import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function defaultLayout({ children }) {
   return <Container container>{children}</Container>;
}

defaultLayout.propTypes = {
   children: PropTypes.element.isRequired,
};

export default defaultLayout;
