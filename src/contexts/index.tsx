import React from 'react';

import { ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';
import { LoadingProvider } from './LoadingContext';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
