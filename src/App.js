import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <BrowserRouter>
               <Routes />
               <GlobalStyle />
               <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
            </BrowserRouter>
         </PersistGate>
      </Provider>
   );
}

export default App;
