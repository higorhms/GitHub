import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
   return (
      <>
         <Routes />
         <GlobalStyle />
         <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
      </>
   );
}

export default App;
