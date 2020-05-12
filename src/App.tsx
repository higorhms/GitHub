import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
          <BrowserRouter>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
          </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
