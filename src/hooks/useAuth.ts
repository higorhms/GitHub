import { useContext } from 'react';

import { AuthContext, ContextData } from '../contexts/AuthContext';

const useAuth = (): ContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('Context must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
