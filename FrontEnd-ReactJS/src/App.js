import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
   return (
      <BrowserRouter>
         <Routes />
         <GlobalStyle />
         <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
      </BrowserRouter>
   );
}

export default App;
