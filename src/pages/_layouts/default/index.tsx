import React from 'react';

import { Container } from './styles';

const defaultLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default defaultLayout;
