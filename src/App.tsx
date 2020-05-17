import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import ContextProvider from './contexts';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
    </ContextProvider>
  );
};

export default App;
