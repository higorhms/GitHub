import React from 'react';

import { Container } from './styles';

export default function defaultLayout({ children }) {
   return <Container container>{children}</Container>;
}
