import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './hooks/ThemeContext';
import Routes from './routes';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
